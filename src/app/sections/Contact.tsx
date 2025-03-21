import { content } from "@/config/content";
import { CTAButton } from "../components";

function Contact() {
  return (
    <section
      className="py-16 bg-orange-500 text-white flex justify-center"
      id="contact"
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {content.contact.title}
          </h2>
          <p className="text-orange-100">{content.contact.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton label="Order Online" link="/menu" size="lg"></CTAButton>
            <CTAButton
              label="Call Us"
              link="/menu"
              size="lg"
              variant="secondary"
            ></CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
