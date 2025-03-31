"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useModal } from "../context/ModalContext";
import CTAButton from "./CTAButton";
import { usePendingOrder } from "../context/PendingOrderContext";
import CartButton from "./CartButton";
import { CartItem } from "@/types/types";

function Modal() {
  const { isOpen, closeModal } = useModal();
  const { order } = usePendingOrder();
  if (!isOpen) return null;

  console.log(order);
  if (!order) {
    return null;
  }

  const matchesPrefix = (id: string, prefixes: string[]) =>
    prefixes.some((prefix: string) => id.startsWith(prefix));

  const renderCustomization = () => {
    switch (true) {
      case matchesPrefix(order.id, ["bom", "bagel"]):
        return (
          <>
            <CardTitle>Choose your spread</CardTitle>
            <CardTitle>Add toppings</CardTitle>
            <CardTitle>Special instructions</CardTitle>
          </>
        );

      default:
        break;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={closeModal}
    >
      <Card
        className="w-full max-w-md bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader>
          <CardTitle>Customize Your Order</CardTitle>
          <CardDescription>
            You&apos;re adding: <span>{order.name}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>{renderCustomization()}</CardContent>
        <CardFooter className="flex justify-between">
          <CTAButton label="Cancel" action={closeModal} variant="secondary" />
          <CartButton label="Add to Cart" product={order as CartItem} />
        </CardFooter>
      </Card>
    </div>
  );
}

export default Modal;
