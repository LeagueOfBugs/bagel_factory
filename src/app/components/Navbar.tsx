import { content } from "../../config/content";
import Image from "next/image";
import CTAButton from "./CTAButton";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

interface NavbarProps {
  navItems: string[];
  cta: string;
}

function Navbar({ navItems, cta }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={`/${content.header.logo.image}`}
              alt={content.header.logo.alt}
              width="70"
              height="70"
            />
          </Link>
          <span className="text-xl font-bold">Morning Bites</span>
        </div>
        <nav>
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item} className="mx-4">
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
            <li>
              <Link href={"/cart"} className="md:flex gap-3">
                Cart
                <ShoppingBag className="h-6 w-6 text-orange-500" />
              </Link>
            </li>
          </ul>
        </nav>
        <CTAButton label={cta} link={"/order-online"} />
      </div>
    </header>
  );
}

export default Navbar;
