"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useModal } from "../../context/ModalContext";
import CTAButton from "../CTAButton";
import CartButton from "../CartButton";
import { CartItem } from "@/types/types";
import { usePendingOrder } from "@/app/context/PendingOrderContext";
import ModalContent from "./ModalContent";

function Modal() {
  const { isOpen, closeModal } = useModal();
  const { order } = usePendingOrder();

  if (!isOpen || !order) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      // onClick={closeModal}
    >
      <Card
        className="w-full max-w-md h-fit bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader>
          <CardTitle>Customize Your Order</CardTitle>
          <CardDescription>
            You&apos;re adding: <span>{order.name}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ModalContent />
        </CardContent>
        <CardFooter className="flex justify-between">
          <CTAButton label="Cancel" action={closeModal} variant="secondary" />
          <CartButton label="Add to Cart" product={order as CartItem} />
        </CardFooter>
      </Card>
    </div>
  );
}

export default Modal;
