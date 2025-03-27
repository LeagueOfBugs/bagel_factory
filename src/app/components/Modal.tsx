"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "../context/CartContext";
import { useModal } from "../context/ModalContext";
import CTAButton from "./CTAButton";

function Modal() {
  const { addItem } = useCart();
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

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
            You&apos;re adding: <span>item here</span>
          </CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter className="flex justify-between">
          <CTAButton label="Cancel" action={closeModal} variant="secondary" />
          <CTAButton label="Add to Cart" action={closeModal} />
        </CardFooter>
      </Card>
    </div>
  );
}

export default Modal;
