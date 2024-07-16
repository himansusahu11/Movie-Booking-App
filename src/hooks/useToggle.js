import { useState } from "react";

export default function useToggle(defultValue) {
  const [value, setValue] = useState(defultValue);

  function toggleValue(value) {
    setValue(value);
  }
  return [value, toggleValue];
}
