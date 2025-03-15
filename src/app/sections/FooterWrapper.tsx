"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import CartFooter from "./CartFooter";


export default function FooterWrapper() {
  const pathname = usePathname();
  const isCartPage = pathname === "/cart";

  return isCartPage ? <CartFooter /> : <Footer />;
}
