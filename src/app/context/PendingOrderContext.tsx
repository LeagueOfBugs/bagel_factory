import { CartItem } from "@/types/types";
import { createContext, useContext } from "react";

type PendingOrderContextType = {
  order: CartItem | null;
  setOrder: (order: CartItem) => void;
  clearOrder: () => void;
};

export const PendingOrderContext = createContext<
  PendingOrderContextType | undefined
>(undefined);

export function usePendingOrder() {
  const context = useContext(PendingOrderContext);
  if (!context) {
    throw new Error(
      "usePendingOrder must be used within a PendingOrderProvider"
    );
  }
  return context;
}
