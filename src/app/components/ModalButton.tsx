"use client";
import React from "react";
import CTAButton from "./CTAButton";
import { useModal } from "../context/ModalContext";

function ModalButton() {
  const { openModal } = useModal();

  return (
    <CTAButton
      action={openModal}
      size="lg"
      variant="primary"
      label="Customize"
    ></CTAButton>
  );
}

export default ModalButton;
