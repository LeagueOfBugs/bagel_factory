import { CartItem } from "@/types/types";

export class Cart {
  private items: CartItem[] = [];
  constructor(cartItems: CartItem[]) {
    this.items = cartItems;
  }

  addItem(product: CartItem) {
    const itemInCart = this.items.find((item) => item.id == product.id);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      this.items.push(product);
    }
  }

  removeItem(product: CartItem) {
    return this.items.filter((item) => item.id !== product.id);
  }

  getItems(): CartItem[] {
    return this.items;
  }

  clearCart(): CartItem[] {
    this.items = [];
    return this.items;
  }

  getTotalPrice() {}

  getTotalItems() {}
}
