import { CartAction, CartItem } from "@/types/types";

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);

    case "DECREASE_QUANTITY":
      return state
        .map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export default cartReducer;
