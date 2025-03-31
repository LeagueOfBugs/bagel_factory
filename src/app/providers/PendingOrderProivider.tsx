"use client";
import { useState } from "react";
import { PendingOrderContext } from "../context/PendingOrderContext";
import { CartItem } from "@/types/types";

export const PendingOrderProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [order, setOrder] = useState<CartItem | null>(null);

  const clearOrder = () => setOrder(null);
  return (
    <PendingOrderContext.Provider value={{ order, setOrder, clearOrder }}>
      {children}
    </PendingOrderContext.Provider>
  );
};

export function PendingOrderProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PendingOrderProvider>{children}</PendingOrderProvider>;
}
