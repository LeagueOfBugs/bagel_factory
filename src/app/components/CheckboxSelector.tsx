import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

type CheckboxSelectorProps = {
  selections: string[];
  label: string;
  checkbox?: boolean;
};

function CheckboxSelector({
  selections,
  label,
  checkbox = false,
}: CheckboxSelectorProps) {
  return (
    <>
      <h3 className="font-bold mt-4 mb-2">{label}</h3>
      <Select>
        <SelectTrigger>
          <SelectValue
            placeholder={checkbox ? "Choose flavor" : selections[0]}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {selections.map((selection) => (
              <SelectItem value={selection} key={selection}>
                {checkbox && <Checkbox />}
                <label>{selection}</label>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

export default CheckboxSelector;
