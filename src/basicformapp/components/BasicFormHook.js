import React, { useState } from "react";
import useBasicInput from "../hook/use-basic-input";

const BasicFormHook = () => {
  let isFormValid = false;
  //================FIRST NAME VALIDATION CODE START==============================
  const {
    value: enteredFirstName,
    isValid: isEnteredFirstNameValid,
    hasError: isEnteredFirstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetField: resetFirstName,
  } = useBasicInput((value) => value.trim() !== "");

  const inputFirstNameDynamicClass = isEnteredFirstNameHasError
    ? "form-control invalid"
    : "form-control";
  // ================FIRST NAME VALIDATION CODE ENDS==============================

  //================LAST NAME VALIDATION CODE START==============================
  const {
    value: enteredLastName,
    isValid: isEnteredLastNameValid,
    hasError: isEnteredLastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetField: resetLastName,
  } = useBasicInput((value) => value.trim() !== "");

  const inputLastNameDynamicClass = isEnteredLastNameHasError
    ? "form-control invalid"
    : "form-control";
  //================LAST NAME VALIDATION CODE ENDS==============================

  //================EMAIL VALIDATION CODE START==============================

  const {
    value: enteredEmail,
    isValid: isEnteredEmailValid,
    hasError: isEnteredEmailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetField: resetEmail,
  } = useBasicInput((value) => {
    return value.trim() !== "" && value.includes("@");
  });

  const inputEmailDynamicClass = isEnteredEmailHasError
    ? "form-control invalid"
    : "form-control";
  //================EMAIL VALIDATION CODE ENDS==============================

  //ALL FIELDS FORM VALIDATION
  if (
    isEnteredFirstNameValid &&
    isEnteredLastNameValid &&
    isEnteredEmailValid
  ) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      !isEnteredFirstNameValid &&
      !isEnteredLastNameValid &&
      isEnteredEmailValid
    ) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={inputFirstNameDynamicClass}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {isEnteredFirstNameHasError && <p>First Name should not be empty</p>}
        </div>
        <div className={inputLastNameDynamicClass}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {isEnteredLastNameHasError && <p>Last Name should not be empty</p>}
        </div>
      </div>
      <div className={inputEmailDynamicClass}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {isEnteredEmailHasError && <p>Email should not be empty Valid</p>}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};
export default BasicFormHook;
