import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { content } from "@/config/content";
import { ProductCard } from "../components";

function SeasonalFlavors() {
  return (
    <section id="seasonal-flavors" className="py-16">
      <div className="container">
        <div className="text-center mb-10">
          <Badge className="bg-orange-500 hover:bg-orange-600 mb-4">
            {content.menu.seasonalFlavors.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.menu.seasonalFlavors.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.menu.seasonalFlavors.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProductCard
            id={content.menu.seasonalFlavors.bagelOfTheMonth.id}
            badge={content.menu.seasonalFlavors.bagelOfTheMonth.badge}
            alt="Pumpkin Spice Bagel"
            name={content.menu.seasonalFlavors.bagelOfTheMonth.name}
            description={
              content.menu.seasonalFlavors.bagelOfTheMonth.description
            }
            cta={content.menu.seasonalFlavors.bagelOfTheMonth.cta}
            price={content.menu.seasonalFlavors.bagelOfTheMonth.price}
          />
          <ProductCard
            id={content.menu.seasonalFlavors.creamCheeseOfTheMonth.id}
            badge={content.menu.seasonalFlavors.creamCheeseOfTheMonth.badge}
            alt="Pumpkin Spice Bagel"
            name={content.menu.seasonalFlavors.creamCheeseOfTheMonth.name}
            description={
              content.menu.seasonalFlavors.creamCheeseOfTheMonth.description
            }
            cta={content.menu.seasonalFlavors.creamCheeseOfTheMonth.cta}
            price={content.menu.seasonalFlavors.creamCheeseOfTheMonth.price}
          />
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground mb-4">
            {content.menu.seasonalFlavors.footer}
          </p>
          <Button
            variant="outline"
            className="border-orange-200 hover:bg-orange-100 dark:border-orange-800 dark:hover:bg-orange-950 hover:text-white"
          >
            {content.menu.seasonalFlavors.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SeasonalFlavors;
