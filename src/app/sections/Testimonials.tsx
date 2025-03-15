import { Card, CardContent } from "@/components/ui/card";
import { content } from "@/config/content";
import Image from "next/image";
function Testimonials() {
  return (
    <section className="py-16 bg-orange-50 dark:bg-orange-950/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.testimonials.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.testimonials.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.testimonials.testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  &quot;{testimonial.quote}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
