"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Clock,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  CreditCard,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/config/content";
import { useCart } from "@/app/context/CartContext";

function Cart() {
  const [orderType, setOrderType] = useState("pickup");
  const [pickupTime, setPickupTime] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");
  const {
    getCartItems,
    addItem,
    removeItem,
    decreaseQuantity,
    getItemTotal,
    getCartSubTotal,
    getSalesTaxTotal,
    cartTotal,
  } = useCart();

  const cartItems = getCartItems();

  const generateTimeOptions = () => {
    const options = [];
    const now = new Date();
    const startTime = new Date(now);

    // Round to next 15 minute interval and add 30 minutes prep time
    const minutes = now.getMinutes();
    const roundedMinutes = Math.ceil(minutes / 15) * 15;
    startTime.setMinutes(roundedMinutes + 30);
    startTime.setSeconds(0);

    // Generate times for the next 3 hours
    for (let i = 0; i < 12; i++) {
      const time = new Date(startTime);
      time.setMinutes(time.getMinutes() + i * 15);

      const hours = time.getHours();
      const minutes = time.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes.toString().padStart(2, "0");

      const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
      options.push(timeString);
    }

    return options;
  };

  const timeOptions = generateTimeOptions();

  return (
    <div className="container justify-center mx-auto max-w-screen-xl">
      <div className="mb-6">
        <Link
          href="/menu"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {content.cart.navigation.goBack}
        </Link>
        <h1 className="text-3xl font-bold">{content.cart.title}</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">
            {content.cart.emptyState.title}
          </h2>
          <p className="text-muted-foreground mb-6">
            {content.cart.emptyState.subtitle}
          </p>
          <Button asChild>
            <Link href="/menu">{content.cart.navigation.menu}</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-base">{item.name}</h3>
                        {/* <p className="text-sm text-muted-foreground">
                          {item.options}
                        </p> */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border rounded-md">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="p-1 px-2 hover:bg-muted"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-2">{item.quantity}</span>
                            <button
                              onClick={() => addItem(item)}
                              className="p-1 px-2 hover:bg-muted"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-medium">
                              ${getItemTotal(item.id)}
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-muted-foreground hover:text-destructive"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Label htmlFor="special-instructions">
                    {content.cart.scpecialInstructions}
                  </Label>
                  <Textarea
                    id="special-instructions"
                    placeholder="Add any special requests or allergies here..."
                    className="mt-1"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">
                  {content.cart.orderSummary.title}
                </h2>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {content.cart.orderSummary.subtotal}
                    </span>
                    {getCartSubTotal()}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {content.cart.orderSummary.tax}
                    </span>
                    ${getSalesTaxTotal()}
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>{content.cart.orderSummary.total}</span>${cartTotal()}
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <div>
                    <h3 className="font-medium mb-2">
                      How would you like to receive your order?
                    </h3>
                    <RadioGroup
                      defaultValue="pickup"
                      value={orderType}
                      onValueChange={setOrderType}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <Label
                          htmlFor="pickup"
                          className="flex items-center gap-1"
                        >
                          <Clock className="h-4 w-4" />{" "}
                          {content.cart.orderSummary.pickup}
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {orderType === "pickup" && (
                    <div>
                      <Label htmlFor="pickup-time">Pickup Time</Label>
                      <Select value={pickupTime} onValueChange={setPickupTime}>
                        <SelectTrigger id="pickup-time" className="w-full mt-1">
                          <SelectValue placeholder="Select pickup time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeOptions.map((time, index) => (
                            <SelectItem key={index} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground mt-1">
                        Our current location: 123 Breakfast Lane, Morningville
                      </p>
                    </div>
                  )}
                </div>

                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">
                  <CreditCard className="mr-2 h-4 w-4" /> Proceed to Checkout
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  By placing your order, you agree to our Terms of Service and
                  Privacy Policy
                </p>
              </CardContent>
            </Card>

            <div className="mt-4 bg-muted p-4 rounded-lg">
              <h3 className="font-medium text-sm mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                Call us at (555) 123-4567 or email{" "}
                <a
                  href="mailto:help@morningbites.com"
                  className="text-orange-500 hover:underline"
                >
                  help@morningbites.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
