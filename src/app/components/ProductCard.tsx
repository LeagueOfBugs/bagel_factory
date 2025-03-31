import { content } from "@/config/content";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ModalButton from "./ModalButton";

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
  price,
  id,
}: ProductCardsProps) {
  const product = {
    id,
    name,
    description,
    price,
    image: image || `/${content.imagePlaceholder}`,
  };
  return (
    <Card className="overflow-hidden border-1 py-0 flex flex-col">
      <div className="relative">
        {badge && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-orange-500 hover:bg-orange-600">{badge}</Badge>
          </div>
        )}
        <div className="relative overflow-hidden">
          <Image
            src={image || `/${content.imagePlaceholder}`}
            alt={alt || "Bagel"}
            width={600}
            height={400}
            className="object-cover transition-transform hover:scale-110 duration-300 ease-in-out"
          />
        </div>
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-orange-500">${price}</span>
          <ModalButton product={product} />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
