import { createContext, useContext } from "react";
import { CartItem } from "@/types/types";

type CartContextType = {
  cartItems: CartItem[];
  addItem: (product: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  decreaseQuantity: (id: string) => void;
  getCartItems: () => CartItem[];
  getItemTotal: (id: string) => number | undefined;
  getCartSubTotal: () => number | undefined;
  getSalesTaxTotal: () => number | undefined;
  cartTotal: () => number | undefined;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
