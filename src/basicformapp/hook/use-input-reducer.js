import React, { useState, useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  if (action.type === "INPUT") {
    return { value: action.val, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  return initialState;
};
const useInputReducer = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  const valueIsValid = validateValue(inputState.value);

  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", val: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "TOUCH", val: true });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
    setEnteredValue("");
    setIsTouched(false);
  };
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInputReducer;
