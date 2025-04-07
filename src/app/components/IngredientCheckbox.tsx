import React from "react";

type IngredientCheckboxProps = {
  label: string;
  onChange: (checked: boolean) => void;
  checked: boolean;
  disabled?: boolean;
  price?: number;
};
function IngredientCheckbox({
  label,
  onChange,
  checked,
  disabled,
  price,
}: IngredientCheckboxProps) {
  return (
    <div>
      <label>
        <input
          onChange={(e) => onChange(e.target.checked)}
          type="checkbox"
          checked={checked}
          disabled={disabled}
        />
        {label}
      </label>
      <span>{price}</span>
    </div>
  );
}

export default IngredientCheckbox;
