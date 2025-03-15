import Image from "next/image";
import { content } from "@/config/content";
import { CTAButton } from "../components";

function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 z-10" />
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src={`/${content.hero.assets.image}`}
          alt="Delicious breakfast spread"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container">
          <div className="max-w-xl space-y-5">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
              {content.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white drop-shadow-md">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                label={content.hero.cta}
                link="/menu"
                variant="primary"
              />
              <CTAButton
                label={content.header.nav.cta}
                link="/menu"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
