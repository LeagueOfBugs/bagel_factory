import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CTAButton, ProductCard } from "../components";
import { content } from "@/config/content";

function FeaturedFoods() {
  return (
    <section className="py-16 bg-muted flex justify-center" id="menu">
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
                <ProductCard
                  key={index}
                  id={item.id}
                  alt={item.name}
                  name={item.name}
                  description={item.description}
                  cta="Add to cart"
                  price={item.price}
                />
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
              {content.menu.bagels.product.slice(0, 4).map((item, index) => (
                <ProductCard
                  key={index}
                  id={item.id}
                  alt={item.name}
                  name={item.name}
                  description={item.description}
                  cta="Add to cart"
                  price={item.price}
                />
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
