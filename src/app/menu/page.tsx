import { content } from "@/config/content";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Coffee } from "lucide-react";
import Link from "next/link";
import CTAButton from "../components/CTAButton";
import { ProductCard } from "../components";
import Modal from "../components/modal/Modal";

function Menu() {
  return (
    <main className="">
      <section className="bg-orange-500 text-white py-5 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col justify-center">
          <Link
            href="/"
            className="inline-flex items-center text-white mb-4 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {content.siteNav.goHome}
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                {content.menu.title}
              </h1>
              <p className="text-orange-100 max-w-2xl">
                {content.menu.subtitle}
              </p>
            </div>

            <div className="flex gap-3 flex-shrink-0">
              <CTAButton label="Download PDF" link="#" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-b justify-center mx-auto max-w-screen-xl">
        <div className="flex justify-center ">
          <Tabs defaultValue={content.menu.bagels.title} className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="inline-flex w-full justify-start h-10 mb-8">
                <TabsTrigger
                  value={content.menu.bagels.title}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  {content.menu.bagels.title}
                </TabsTrigger>
                <TabsTrigger
                  value={content.menu.creamCheese.title}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  {content.menu.creamCheese.title}
                </TabsTrigger>
                <TabsTrigger
                  value={content.menu.salads.title}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  {content.menu.salads.title}
                </TabsTrigger>
                <TabsTrigger
                  value={content.menu.sandwiches.title}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  {content.menu.sandwiches.title}
                </TabsTrigger>
                <TabsTrigger
                  value={content.menu.paninis.title}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  {content.menu.paninis.title}
                </TabsTrigger>
                <TabsTrigger
                  value={content.menu.omelets.title}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  {content.menu.omelets.title}
                </TabsTrigger>
                <TabsTrigger
                  value={content.menu.sides.title}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  {content.menu.sides.title}
                </TabsTrigger>
                <TabsTrigger
                  value={content.menu.drinks.title}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  {content.menu.drinks.title}
                </TabsTrigger>
                <TabsTrigger
                  value={content.menu.desserts.title}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  {content.menu.desserts.title}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Bagels Section */}
            <TabsContent
              value={content.menu.bagels.title}
              className="space-y-8"
            >
              <div className="grid gap-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">Bagels</h2>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                    {content.menu.bagels.badge}
                  </Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  {content.menu.bagels.menuSummary}
                </p>
              </div>

              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Bagel Varieties
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.menu.bagels.product.map((product, index) => (
                      <ProductCard
                        key={index}
                        image={product.image}
                        alt={product.name}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        id={product.id}
                        badge={product.badge}
                        cta="Add to cart"
                      />
                    ))}
                  </div>
                </div>

                {/* Bagel Deals */}
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    {content.menu.bagels.deals.title}
                  </h3>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                      <div>
                        <h4 className="font-bold">
                          {content.menu.bagels.deals.individual.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {content.menu.bagels.deals.individual.description}
                        </p>
                      </div>
                      <span className="font-bold text-orange-500">
                        {content.menu.bagels.deals.individual.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                      <div>
                        <h4 className="font-bold">
                          {content.menu.bagels.deals.halfDozen.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {content.menu.bagels.deals.halfDozen.description}
                        </p>
                      </div>
                      <span className="font-bold text-orange-500">
                        {content.menu.bagels.deals.halfDozen.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                      <div>
                        <h4 className="font-bold">
                          {content.menu.bagels.deals.dozen.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {content.menu.bagels.deals.dozen.description}
                        </p>
                      </div>
                      <span className="font-bold text-orange-500">
                        {content.menu.bagels.deals.dozen.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Bagel Deals */}
            <TabsContent
              value={content.menu.salads.title}
              className="space-y-8"
            >
              <div className="grid gap-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">
                    {content.menu.salads.title}
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  {content.menu.salads.subtitle}
                </p>
              </div>

              <div className="grid gap-8">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {content.menu.salads.product.map((product, index) => (
                      <ProductCard
                        key={index}
                        image={product.image}
                        alt={product.name}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        id={product.id}
                        badge={product.badge}
                        cta="Add to cart"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value={content.menu.creamCheese.title}
              className="space-y-8"
            >
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    {content.menu.creamCheese.menuPageTitle}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.menu.creamCheese.product.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{item.name}</h4>
                            {item.badge && (
                              <Badge className="bg-orange-500">
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <span className="font-bold text-orange-500">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Sandwiches Section */}
            <TabsContent
              value={content.menu.sandwiches.title}
              className="space-y-8"
            >
              <div className="grid gap-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">
                    {content.menu.sandwiches.standard.breakfastSandwiches.title}
                  </h2>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                    {content.menu.sandwiches.badge}
                  </Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  {
                    content.menu.sandwiches.standard.breakfastSandwiches
                      .subtitle
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.menu.sandwiches.standard.breakfastSandwiches.product.map(
                  (product, index) => (
                    <ProductCard
                      key={index}
                      image={product.image}
                      alt={product.name}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      id={product.id}
                      badge={product.badge}
                      cta="Add to cart"
                    />
                  )
                )}
              </div>

              <div className="grid gap-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">
                    {content.menu.sandwiches.standard.lunchSandwiches.title}
                  </h2>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                    {content.menu.sandwiches.standard.lunchSandwiches.badge}
                  </Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  {content.menu.sandwiches.standard.lunchSandwiches.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.menu.sandwiches.standard.lunchSandwiches.product.map(
                  (product, index) => (
                    <ProductCard
                      key={index}
                      image={product.image}
                      alt={product.name}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      id={product.id}
                      cta="Add to cart"
                    />
                  )
                )}
              </div>
            </TabsContent>

            {/* Paninis Section */}
            <TabsContent
              value={content.menu.paninis.title}
              className="space-y-8"
            >
              <div className="grid gap-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">
                    {content.menu.paninis.title}
                  </h2>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                    Served All Day
                  </Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  {content.menu.paninis.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.menu.paninis.product.map((product, index) => (
                  <ProductCard
                    key={index}
                    image={product.image}
                    alt={product.name}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    id={product.id}
                    cta="Add to cart"
                  />
                ))}
              </div>
            </TabsContent>

            {/* Omelets Section */}
            <TabsContent
              value={content.menu.omelets.title}
              className="space-y-8"
            >
              <div className="grid gap-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">
                    {content.menu.omelets.title}
                  </h2>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                    {content.menu.omelets.badge}
                  </Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  {content.menu.omelets.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.menu.paninis.product.map((product, index) => (
                  <ProductCard
                    key={index}
                    image={product.image}
                    alt={product.name}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    id={product.id}
                    cta="Add to cart"
                  />
                ))}
              </div>
            </TabsContent>

            {/* Sides Section */}
            <TabsContent value={content.menu.sides.title} className="space-y-8">
              <div className="grid gap-6">
                <h2 className="text-2xl font-bold">
                  {content.menu.sides.title}
                </h2>
                <p className="text-muted-foreground max-w-3xl">
                  {content.menu.sides.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.menu.sides.product.map((product, index) => (
                  <ProductCard
                    key={index}
                    image={product.image}
                    alt={product.name}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    id={product.id}
                    cta="Add to cart"
                  />
                ))}
              </div>
            </TabsContent>

            {/* Drinks Section */}
            <TabsContent
              value={content.menu.drinks.title}
              className="space-y-8"
            >
              <div className="grid gap-6">
                <h2 className="text-2xl font-bold">
                  {content.menu.drinks.title}
                </h2>
                <p className="text-muted-foreground max-w-3xl">
                  {content.menu.drinks.subtitle}
                </p>
              </div>

              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-orange-500" />
                    {content.menu.drinks.cofeeAndTea.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.menu.drinks.cofeeAndTea.product.map(
                      (item, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-1">{item.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.description}
                          </p>
                          <div className="flex justify-between text-sm">
                            {item.sizes.map((size, i) => (
                              <div key={i} className="text-center">
                                <p className="font-medium">{size.size}</p>
                                <p className="text-orange-500">{size.price}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Cold Beverages */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Cold Beverages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {content.menu.drinks.coldBeverages.product.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="flex justify-between p-4 border rounded-lg"
                        >
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <span className="font-bold text-orange-500">
                            {item.price}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Specialty Drinks */}
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">
                    {content.menu.drinks.specialtyDrinks.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.menu.drinks.specialtyDrinks.product.map(
                      (item, index) => (
                        <div
                          key={index}
                          className="flex justify-between p-4 bg-background rounded-lg"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{item.name}</h4>
                              {item.badge && (
                                <Badge className="bg-orange-500">
                                  {item.badge}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <span className="font-bold text-orange-500">
                            {item.price}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Desserts Section */}
            <TabsContent
              value={content.menu.desserts.title}
              className="space-y-8"
            >
              <div className="grid gap-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">
                    {content.menu.desserts.title}
                  </h2>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                    Baked Fresh Daily
                  </Badge>
                </div>
                <p className="text-muted-foreground max-w-3xl">
                  {content.menu.desserts.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.menu.desserts.product.map((product, index) => (
                  <ProductCard
                    key={index}
                    image={product.image}
                    alt={product.name}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    id={product.id}
                    cta="Add to cart"
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="py-8 bg-muted flex justify-center">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-xl font-bold">Dietary Information</h2>
            <p className="text-sm text-muted-foreground">
              We&apos;re happy to accommodate dietary restrictions and
              allergies. Please inform our staff of any special requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="bg-background">
                Vegetarian Options
              </Badge>
              <Badge variant="outline" className="bg-background">
                Vegan Options
              </Badge>
              <Badge variant="outline" className="bg-background">
                Gluten-Free Options
              </Badge>
              <Badge variant="outline" className="bg-background">
                Nut-Free Options
              </Badge>
              <Badge variant="outline" className="bg-background">
                Dairy-Free Options
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-12 bg-orange-500 text-white flex justify-center">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Order?</h2>
            <p className="text-orange-100">
              Skip the line and order ahead for pickup or delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-500 hover:bg-orange-100"
              >
                Order Online
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-orange-600"
              >
                Call Us: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Modal />
    </main>
  );
}

export default Menu;
