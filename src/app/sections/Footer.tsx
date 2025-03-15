import Link from "next/link";
import Image from "next/image";
import {CTAButton} from "../components";
import { content } from "@/config/content";
function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Morning Bites Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">
                {content.contact.companyName}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {content.footer.companyFact}
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">
              {content.footer.quickLinkTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Catering
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">{content.footer.contactTitle}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                {content.contact.address}
              </li>
              <li className="text-muted-foreground">{content.contact.phone}</li>
              <li className="text-muted-foreground">{content.contact.email}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">
              {content.footer.newsletterTitle}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {content.footer.newsletterSubTitle}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-sm rounded-md border bg-background flex-1"
              />
              <CTAButton label="Sign Up" size={"sm"} link="#" />
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {content.footer.rights}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
