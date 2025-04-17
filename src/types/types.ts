export interface CartItem {
  id: string;
  name: string;
  image: string | undefined;
  description: string;
  price: number;
  quantity?: number;
  options?: Products[];
}

export interface CTAButtonProps {
  label: string;
  link?: string;
  size?: "lg" | "default" | "sm" | "icon" | null | undefined;
  variant?: "primary" | "secondary";
  action?: () => void;
}

export type CartButtonProps = Omit<CTAButtonProps, "action"> & {
  product: CartItem;
};

export interface Products {
  name: string;
  image: string;
  description: string;
  price: number;
  id: string;
}

export type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "CLEAR_CART" }
  | { type: "DECREASE_QUANTITY"; payload: string }
  | { type: "ITEM_TOTAL"; payload: string }
  | { type: "CART_TOTAL" };

// Testing new type
type OrderCategory = "bagel" | "spread" | "sandwich" | "bulk" | "custom";

type BaseOrderItem = {
  id: string;
  type: OrderCategory;
  name: string;
  note?: string;
};

type SandwichItem = BaseOrderItem & {
  type: "sandwich";
  bagelType?: string;
  extras?: string[];
  isCustom?: boolean;
};

type BagelItem = BaseOrderItem & {
  type: "sandwich";
  bagelType?: string;
  extras?: string[];
  isCustom?: boolean;
};

type SpreadItem = BaseOrderItem & {
  type: "spread";
  withBagel?: string;
};

type BulkItem = BaseOrderItem & {
  type: "bulk";
  category: "bagels" | "spreads";
};

type SaladItem = BaseOrderItem & {
  type: "salad";
  dressing?: string;
  extras?: string[];
};

type DessertItem = BaseOrderItem & {
  type: "dessert";
};

type DrinkItem = BaseOrderItem & {
  type: "drink";
  size?: "small" | "medium" | "large";
  options?: string[]; // e.g. "iced", "no sugar"
};

type CustomComboItem = BaseOrderItem & {
  type: "custom";
  items: BaseOrderItem[];
};

type OrderItem =
  | BagelItem
  | SpreadItem
  | SandwichItem
  | BulkItem
  | CustomComboItem;

export type Order = {
  items: OrderItem[];
  total: number;
  note?: string;
};
