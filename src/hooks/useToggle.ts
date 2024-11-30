import { useState } from "react";

const useToggle = (
  defaultValue = false
): [boolean, (value?: boolean) => void] => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value?: boolean) => {
    setValue((prev) => (typeof value === "boolean" ? value : !prev));
  };

  return [value, toggleValue];
};

export default useToggle;
