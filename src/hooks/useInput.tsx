import { ChangeEvent, useState } from "react";

type ValidateFunction<T> = (data: T) => boolean;

const useInput = <T extends unknown>(
  initialValue: T,
  validate: ValidateFunction<T>
) => {
  const [value, setValue] = useState<T>(initialValue);
  const [wasFocused, setWasFocused] = useState(false);

  const valueIsValid = validate(value);
  const inputIsInvalid = !valueIsValid && wasFocused;

  const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as T);
  };

  const blurHandler = () => {
    setWasFocused((prevState) => !prevState);
  };

  const reset = (value: T) => {
    setValue(value);
    setWasFocused(false);
  };

  return {
    value,
    valueIsValid,
    inputIsInvalid,
    valueChangeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
