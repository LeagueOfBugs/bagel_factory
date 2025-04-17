import { BagelOptions } from "./BagelOptions";
import { usePendingOrder } from "@/app/context/PendingOrderContext";
import BulkOrder from "./BulkOrder";
import SpreadOptions from "./SpreadOptions";
import useOrderMaker from "@/hooks/useOrderMaker";

function ModalContent() {
  const { order } = usePendingOrder();
  const {
    spread,
    handleSpreadChange,
    extra,
    handleExtrasChange,
    bulkBagel,
    handleBulkBagelChange,
    bulkSpread,
    handleBulkSpreadChange,
    specialInstructions,
    setSpecialInstructions,
    bagel,
    handleBagelChange,
  } = useOrderMaker();

  if (!order) {
    return null;
  }

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
          selectedExtras={extra}
          spread={spread}
          onExtrasChange={handleExtrasChange}
          onSpreadChange={handleSpreadChange}
        />
        <BulkOrder
          isBagel
          spread={spread}
          extra={extra}
          handleBulkBagelChange={handleBulkBagelChange}
          bulkBagel={bulkBagel}
        />
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
        <BulkOrder
          isSpread
          handleBulkSpreadChange={handleBulkSpreadChange}
          bulkSpread={bulkSpread}
          extra={extra}
          spread={spread}
        />
        <SpreadOptions
          onExtrasChange={handleExtrasChange}
          selectedExtras={extra}
          selectedBagel={bagel}
          onBagelChange={handleBagelChange}
        />
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
