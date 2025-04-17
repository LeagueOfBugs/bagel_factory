"use client";
import IngredientCheckbox from "../IngredientCheckbox";
import CheckboxSelector from "../CheckboxSelector";
import { menu } from "@/config/menu";

type BulkOption = {
  name: string;
  price: number;
};

type BulkOrderProps = {
  isSpread?: boolean;
  isBagel?: boolean;
  spread?: string[];
  extra?: string[];
  bulkBagel?: string;
  handleBulkBagelChange?: (bulkOption: string) => void;
  bulkSpread?: string | null;
  handleBulkSpreadChange?: (bulkOption: string) => void;
};

function BulkOrder({
  isSpread = false,
  isBagel = false,
  spread,
  extra,
  bulkBagel,
  handleBulkBagelChange,
  bulkSpread,
  handleBulkSpreadChange,
}: BulkOrderProps) {
  const spreadBulkOptions: BulkOption[] = [
    { name: "1/4 lb", price: 3.5 },
    { name: "1/2 lb", price: 5.99 },
    { name: "1 lb", price: 9.99 },
  ];

  const bagelBulkOptions: BulkOption[] = [
    { name: "Single Bagel", price: 3.99 },
    { name: "Half Dozen (6)", price: 19.99 },
    { name: "Dozen (12)", price: 36.99 },
    { name: "Baker's Dozen (13)", price: 38.99 },
  ];

  const bagelSelectionTypes = [
    "Assorted Chef's selection",
    "Same type for all",
    "Custom Selection",
  ];

  const bagelNames = menu
    .filter((item) => item.id.includes("bagel"))
    .map((item) => item.name);

  return (
    <>
      {isSpread && (
        <>
          <h3 className="font-bold">Bulk options:</h3>
          {spreadBulkOptions.map((option) => (
            <IngredientCheckbox
              key={option.name}
              label={option.name}
              onChange={() => handleBulkSpreadChange?.(option.name)}
              checked={bulkSpread === option.name}
              price={option.price}
              disabled={
                (spread && spread.length > 0) || (extra && extra.length > 0)
              }
            />
          ))}
        </>
      )}

      {isBagel && (
        <>
          <h3 className="font-bold">Bagel quantity:</h3>
          {bagelBulkOptions.map((option) => (
            <IngredientCheckbox
              key={option.name}
              label={option.name}
              onChange={() => handleBulkBagelChange?.(option.name)}
              checked={bulkBagel === option.name}
              price={option.price}
              disabled={
                (spread && spread.length > 0) || (extra && extra.length > 0)
              }
            />
          ))}

          <CheckboxSelector
            selections={bagelSelectionTypes}
            label="Bagel Selection"
          />

          <CheckboxSelector selections={bagelNames} label="Bagel Type" />
        </>
      )}
    </>
  );
}

export default BulkOrder;
