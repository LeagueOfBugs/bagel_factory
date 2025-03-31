"use client";

import { CartButtonProps } from "@/types/types";
import CTAButton from "./CTAButton";
import { useCart } from "@/app/context/CartContext";
import { usePendingOrder } from "../context/PendingOrderContext";

function CartButton({ size, variant, label, product }: CartButtonProps) {
  const { addItem } = useCart();
  const { order, clearOrder } = usePendingOrder();
  const handleClick = () => {
    addItem(product);
    if (order) {
      clearOrder();
    }
  };
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
