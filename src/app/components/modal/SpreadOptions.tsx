import { menu } from "@/config/menu";
import React from "react";
import IngredientCheckbox from "../IngredientCheckbox";

function SpreadOptions({
  onExtrasChange,
  selectedExtras,
  selectedBagel,
  onBagelChange,
}: {
  onExtrasChange: (item: string, checked: boolean) => void;
  selectedExtras: string[];
  selectedBagel: string;
  onBagelChange: (item: string) => void;
}) {
  return (
    <div>
      <h3 className="font-bold ">Bagel type</h3>
      <div className="grid w-full grid-cols-2">
        {menu
          .filter((item) => item.id.includes("bagel"))
          .map((bagels) => (
            <IngredientCheckbox
              key={bagels.id}
              label={bagels.name}
              price={bagels.price}
              checked={selectedBagel === bagels.name}
              onChange={() => onBagelChange(bagels.name)}
            />
          ))}
      </div>
      <h3 className="font-bold ">Add extras</h3>
      <div className="grid w-full grid-cols-2">
        {menu
          .filter((item) => item.id.includes("toppings"))
          .map((item) => (
            <IngredientCheckbox
              key={item.id}
              label={item.name}
              checked={selectedExtras.includes(item.name)}
              onChange={(checked: boolean) =>
                onExtrasChange(item.name, checked)
              }
            />
          ))}
      </div>
    </div>
  );
}

export default SpreadOptions;
