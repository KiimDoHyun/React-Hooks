import { useState } from "react";

const useInput = (initialvalue, validator) => {
  const [value, setValue] = useState(initialvalue);
  const onChange = (event) => {
    // console.log(event);
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default useInput;
