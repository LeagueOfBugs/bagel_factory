"use client";

import React from "react";
import CTAButton from "./CTAButton";
import { useModal } from "../context/ModalContext";
import { Products } from "@/types/types";
import { usePendingOrder } from "../context/PendingOrderContext";

function ModalButton({ product }: { product: Products }) {
  const { openModal } = useModal();
  const { setOrder } = usePendingOrder();
  const handleClick = () => {
    setOrder(product);
    openModal();
  };
  return (
    <CTAButton
      action={handleClick}
      size="lg"
      variant="primary"
      label="Customize"
    ></CTAButton>
  );
}

export default ModalButton;
