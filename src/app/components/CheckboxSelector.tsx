import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

type CheckboxSelectorProps = {
  selections: string[];
  label: string;
};

function CheckboxSelector({ selections, label }: CheckboxSelectorProps) {
  return (
    <>
      <h3 className="font-bold mt-4 mb-2">{label}</h3>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose flavor" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {selections.map((selection) => (
              <SelectItem value={selection} key={selection}>
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
