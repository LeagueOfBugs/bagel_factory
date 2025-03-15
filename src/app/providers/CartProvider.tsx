"use client";
import { CartItem } from "@/types/types";
import { CartContext } from "@/context/CartContext";
import { useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
import { content } from "@/config/content";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const initialState: CartItem[] = [];
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);
  const addItem = (product: CartItem) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeItem = (id: string) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const getCartItems = () => {
    return cartItems;
  };

  const decreaseQuantity = (id: string) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  const getItemTotal = (id: string) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const total = item.price * item.quantity;
      return total;
    }
  };

  const getCartSubTotal = () => {
    if (cartItems.length > 0) {
      return cartItems.reduce((total, item) => {
        const itemTotal = getItemTotal(item.id);
        return total + (itemTotal || 0);
      }, 0);
    }
  };

  const getSalesTaxTotal = () => {
    const cartTotal = getCartSubTotal();
    if (!cartTotal) {
      return 0;
    }
    return cartTotal * content.menu.salesTax;
  };

  const cartTotal = () => {
    const salesTax = getSalesTaxTotal();
    const subtotal = getCartSubTotal();
    if (subtotal === undefined || salesTax === undefined) {
      return 0;
    }
    return subtotal + salesTax;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clearCart,
        getCartItems,
        decreaseQuantity,
        getItemTotal,
        getCartSubTotal,
        getSalesTaxTotal,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function CartProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartProvider>{children}</CartProvider>;
}
