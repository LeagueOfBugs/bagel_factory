import { content } from "@/config/content";
import Image from "next/image";
function OurStory() {
  return (
    <section className="py-16 flex justify-center" id="about">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={`/${content.imagePlaceholder}`}
              alt="Our bakery"
              height={400}
              width={600}
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              {content.about.title}
            </h2>
            <p className="text-muted-foreground">{content.about.storyPt1}</p>

            <p className="text-muted-foreground">{content.about.storyPt2}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-orange-500">5,000+</p>
                <p className="text-sm text-muted-foreground">
                  Happy Customers Weekly
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-orange-500">15+</p>
                <p className="text-sm text-muted-foreground">
                  Bagel Varieties Daily
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
