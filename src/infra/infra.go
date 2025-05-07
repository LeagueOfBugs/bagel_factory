package main

import (
	"fmt"
	"os"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsapigateway"
	"github.com/aws/aws-cdk-go/awscdk/v2/awslambda"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/joho/godotenv"
)

// allows you to extend the properties of the stack if needed
type GoApiStackProps struct {
	awscdk.StackProps
}

func NewGoApiStack(scope constructs.Construct, id string, props *GoApiStackProps) awscdk.Stack {
	// This line creates a new AWS CDK stack. A stack is a container for AWS resources (like Lambda, API Gateway, etc.). Stacks are used to group related resources together
	stack := awscdk.NewStack(scope, jsii.String(id), &props.StackProps)

	// creates a new Lambda function
	fn := awslambda.NewFunction(stack, jsii.String("GoLambdaHandler"), &awslambda.FunctionProps{
		Runtime: awslambda.Runtime_PROVIDED_AL2(),
		Handler: jsii.String("bootstrap"),
		Code:    awslambda.Code_FromAsset(jsii.String("lambda/bin"), nil),
	})

	// creates a new API Gateway
	awsapigateway.NewLambdaRestApi(stack, jsii.String("GoApiGateway"), &awsapigateway.LambdaRestApiProps{
		Handler: fn,
	})

	// returns the stack that has been created
	return stack
}

func main() {
	// loading environement variables from .env file
	err := godotenv.Load("../../.env")
	if err != nil {
		panic(err)
	}

	// Initializes a new AWS CDK app
	app := awscdk.NewApp(nil)

	// creates the stack
	NewGoApiStack(app, "GoApiStack", &GoApiStackProps{
		StackProps: awscdk.StackProps{
			Env: env(),
		},
	})

	// Synthesizes the app, which compiles all of the AWS resources into a CloudFormation template
	app.Synth(nil)
}

func env() *awscdk.Environment {
	accountId := os.Getenv("AWS_ACCOUNT_ID")
	region := os.Getenv("AWS_REGION")

	// check if AWS_ACCOUNT_ID or AWS_REGION is set
	if accountId == "" && region == "" {
		fmt.Println("Error: AWS_ACCOUNT_ID or AWS_REGION is not set")
		return nil
	}

	return &awscdk.Environment{
		Account: jsii.String(accountId),
		Region:  jsii.String(region),
	}
}
