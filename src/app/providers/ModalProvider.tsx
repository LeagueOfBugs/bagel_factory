"use client";
import { ReactNode, useState } from "react";
import { ModalContext } from "../context/ModalContext";

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function ModalProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ModalProvider>{children}</ModalProvider>;
}
