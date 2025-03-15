export interface CartItem {
  id: string;
  name: string;
  image: string | undefined;
  description: string;
  price: number;
  quantity: number;
}

export interface CTAButtonProps {
  label: string;
  link?: string;
  size?: "lg" | "default" | "sm" | "icon" | null | undefined;
  variant?: "primary" | "secondary";
  action: () => void;
}

export type CartButtonProps = Omit<CTAButtonProps, "action"> & {
  product: CartItem;
};

export interface Products {
  name: string;
  image: string;
  description: string;
  price: string;
  id: number;
}

export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "CLEAR_CART" }
  | { type: "DECREASE_QUANTITY"; payload: string }
  | { type: "ITEM_TOTAL"; payload: string }
  | { type: "CART_TOTAL" };
// | { type: }
