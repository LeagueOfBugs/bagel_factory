import { useState } from "react";

function useOrderMaker() {
  const [spread, setSpread] = useState<string[]>([]);
  const [bagel, setBagel] = useState<string>("");
  const [extra, setExtra] = useState<string[]>([]);
  const [bulkBagel, setBulkBagel] = useState<string>("");
  const [bulkSpread, setBulkSpread] = useState<string>("");
  const [specialInstructions, setSpecialInstructions] = useState<string>(
    "Special instructions"
  );

  const handleBagelChange = (selectedBagel: string) => {
    setBagel(selectedBagel);
  };

  const handleSpreadChange = (selectedSpread: string, checked: boolean) => {
    if (checked) {
      if (spread.length < 2) {
        setSpread((prevState) =>
          prevState ? [...prevState, selectedSpread] : [selectedSpread]
        );
      }
    } else {
      setSpread((prevState) =>
        prevState?.filter((item) => item !== selectedSpread)
      );
    }
  };

  const handleExtrasChange = (extra: string, checked: boolean) => {
    if (checked) {
      setExtra((prevState) => (prevState ? [...prevState, extra] : [extra]));
    } else {
      setExtra((prevState) => prevState?.filter((item) => item !== extra));
    }
  };

  const handleBulkBagelChange = (bulkOption: string) => {
    setBulkBagel(bulkOption);
  };
  const handleBulkSpreadChange = (bulkOption: string) => {
    setBulkSpread(bulkOption);
  };

  return {
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
  };
}

export default useOrderMaker;
