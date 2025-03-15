import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { CTAButton } from "../components";
import { content } from "@/config/content";

function FeaturedFoods() {
  return (
    <section className="py-16 bg-muted" id="menu">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.menu.signatureItems.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.menu.signatureItems.subtitle}
          </p>
        </div>

        <Tabs defaultValue="sandwiches" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="sandwiches">Breakfast Sandwiches</TabsTrigger>
            <TabsTrigger value="bagels">Fresh Bagels</TabsTrigger>
          </TabsList>
          <TabsContent value="sandwiches" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.menu.signatureItems.product.map((item, index) => (
                <Card key={index}>
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <span className="font-bold text-orange-500">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <CTAButton
                label="View Full Menu"
                link="/menu"
                variant="secondary"
              />
            </div>
          </TabsContent>
          <TabsContent value="bagels" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Everything Bagel",
                  description:
                    "Our signature bagel with sesame, poppy, garlic, onion, and salt",
                  price: "$3.49",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  name: "Cinnamon Raisin",
                  description:
                    "Sweet cinnamon and plump raisins in a soft, chewy bagel",
                  price: "$3.49",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  name: "Asiago Cheese",
                  description:
                    "Topped with aged Asiago cheese for a savory, crispy crust",
                  price: "$3.99",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  name: "Blueberry",
                  description:
                    "Bursting with fresh blueberries for a sweet breakfast treat",
                  price: "$3.49",
                  image: "/placeholder.svg?height=300&width=400",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <span className="font-bold text-orange-500">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <CTAButton
                label="View Full Menu"
                link="/menu"
                variant="secondary"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default FeaturedFoods;
