"use client";

import { CartButtonProps } from "@/types/types";
import CTAButton from "./CTAButton";
import { useCart } from "@/context/CartContext";

function CartButton({ size, variant, label, product }: CartButtonProps) {
  const { addItem, getCartItems } = useCart();
  const handleClick = () => addItem(product);
  console.log(getCartItems());
  return (
    <CTAButton
      action={handleClick}
      size={size}
      variant={variant}
      label={label}
    ></CTAButton>
  );
}

export default CartButton;
