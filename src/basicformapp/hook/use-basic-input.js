import React, { useState } from "react";

const useBasicInput = (inputValueValidator) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFieldTouched, setIsInputFieldTouched] = useState(false);
  const isInputValueValid = inputValueValidator(inputValue);
  const isInputValueHasError = !isInputValueValid && isInputFieldTouched;
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setIsInputFieldTouched(true);
  };
  const resetField = () => {
    setInputValue("");
    setIsInputFieldTouched(false);
  };
  return {
    value: inputValue,
    isValid: isInputValueValid,
    hasError: isInputValueHasError,
    inputChangeHandler,
    inputBlurHandler,
    resetField,
  };
};
export default useBasicInput;
