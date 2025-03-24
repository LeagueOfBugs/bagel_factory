"use client";

import { CartButtonProps } from "@/types/types";
import CTAButton from "./CTAButton";
import { useCart } from "@/app/context/CartContext";

function CartButton({ size, variant, label, product }: CartButtonProps) {
  const { addItem } = useCart();
  const handleClick = () => addItem(product);

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
