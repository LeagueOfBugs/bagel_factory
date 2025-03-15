import { content } from "@/config/content";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CartButton from "./CartButton";
import { CartItem } from "@/types/types";

interface ProductCardsProps {
  image?: string;
  alt?: string;
  name: string;
  description: string;
  badge?: string;
  cta: string;
  id: string;
  price: number;
}
function ProductCard({
  badge,
  image,
  alt,
  name,
  description,
  cta,
  id,
  price,
}: ProductCardsProps) {
  const product: CartItem = {
    id,
    name,
    image,
    description,
    price,
    quantity: 1,
  };
  return (
    <Card className="overflow-hidden border-1">
      <div className="relative">
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-orange-500 hover:bg-orange-600">{badge}</Badge>
        </div>
        <div className=" relative overflow-hidden">
          <Image
            src={image || `/${content.imagePlaceholder}`}
            alt={alt || "Pumpkin Spice Bagel"}
            width={600}
            height={400}
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-orange-500">$3.99</span>
          <CartButton label={cta} size="sm" link={"#"} product={product} />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
