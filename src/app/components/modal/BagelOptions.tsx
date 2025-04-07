import { menu } from "@/config/menu";
import IngredientCheckbox from "../IngredientCheckbox";

export function BagelOptions({
  selectedSpread,
  selectedExtras,
  onSpreadChange,
  onExtrasChange,
}: {
  selectedSpread: string[];
  selectedExtras: string[];
  onSpreadChange: (item: string, checked: boolean) => void;
  onExtrasChange: (item: string, checked: boolean) => void;
  specialInstructions: string;
  onInstructionsChange: (value: string) => void;
}) {
  return (
    <div>
      <h3 className="font-bold ">Choose your spread:</h3>
      <div className="grid w-full grid-cols-2">
        {menu
          .filter((item) => item.id.includes("cc"))
          .map((item) => (
            <IngredientCheckbox
              key={item.id}
              label={item.name}
              checked={selectedSpread.includes(item.name)}
              disabled={
                selectedSpread.length >= 2 &&
                !selectedSpread.includes(item.name)
              }
              onChange={(checked: boolean) =>
                onSpreadChange(item.name, checked)
              }
            />
          ))}
      </div>

      <h3 className="font-bold mt-4">Add extras:</h3>
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
