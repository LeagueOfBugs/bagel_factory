import React, { useState } from "react";
import { BagelOptions } from "./BagelOptions";
import { usePendingOrder } from "@/app/context/PendingOrderContext";
import BulkOrder from "./BulkOrder";
import SpreadOptions from "./SpreadOptions";

function ModalContent() {
  const { order } = usePendingOrder();
  const [selectedSpread, setSelectedSpread] = useState<string[]>([]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  // const [customizedOrder, setCustomizedOrder] = useState({});
  const [specialInstructions, setSpecialInstructions] = useState<string>(
    "Any special requests for your order..."
  );

  if (!order) {
    return null;
  }

  // const placedOrder = {
  //   bagel: ["bom", "cc", "bagel"].some((keyword) => order.id.includes(keyword))
  //     ? order.name
  //     : "",
  //   spread: [...selectedSpread],
  //   extras: [...selectedExtras],
  //   specialInstructions: specialInstructions,
  // };

  const handleIngredientChange = (ingredient: string, checked: boolean) => {
    if (checked) {
      if (selectedSpread.length < 2) {
        setSelectedSpread((prevState) => [...prevState, ingredient]);
      }
    } else {
      setSelectedSpread((prevState) =>
        prevState.filter((item) => item !== ingredient)
      );
    }
  };

  const handleExtrasChange = (ingredient: string, checked: boolean) => {
    if (checked) {
      setSelectedExtras((prevState) => [...prevState, ingredient]);
    } else {
      setSelectedExtras((prevState) =>
        prevState.filter((item) => item !== ingredient)
      );
    }
  };

  const isBagel = () => {
    return ["bagel", "bom-"].some((keyword) => order.id.includes(keyword));
  };

  const isSpread = () => {
    return ["cc", "ccom-"].some((keyword) => order.id.includes(keyword));
  };

  if (isBagel()) {
    return (
      <>
        <BagelOptions
          selectedExtras={selectedExtras}
          selectedSpread={selectedSpread}
          onExtrasChange={handleExtrasChange}
          onSpreadChange={handleIngredientChange}
          specialInstructions={specialInstructions}
          onInstructionsChange={setSpecialInstructions}
        />
        <BulkOrder isBagel />
        <h3 className="font-bold mt-4 mb-2">Special instructions</h3>
        <textarea
          className="w-full border rounded p-2 h-20 resize-none"
          placeholder={specialInstructions}
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
        />
      </>
    );
  }

  if (isSpread()) {
    return (
      <>
        <BulkOrder isSpread />
        <SpreadOptions />
        <h3 className="font-bold mt-4 mb-2">Special instructions</h3>
        <textarea
          className="w-full border rounded p-2 h-20 resize-none"
          placeholder={specialInstructions}
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
        />
      </>
    );
  }

  return <div className="grid w-full grid-cols-2"></div>;
}

export default ModalContent;
