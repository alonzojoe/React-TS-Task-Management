import { useState } from "react";

const useToggle = (defaultValue = false) => {
  const [toggle, setToggle] = useState(defaultValue);

  const toggleValue = (value?: boolean) => {
    setToggle((prev) => {
      return typeof value === "boolean" ? value : !prev;
    });
  };

  return [toggle, toggleValue];
};

export default useToggle;
