import React, { useState } from "react";

const BasicForm = () => {
  let isFormValid = false;
  //================FIRST NAME VALIDATION CODE START==============================
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [isFirstNameInputFieldTouched, setIsFirstNameInputFieldTouched] =
    useState(false);
  const isEnteredFirstNameValid = enteredFirstName.trim() !== "";
  const isEnteredFirstNameHasError =
    !isEnteredFirstNameValid && isFirstNameInputFieldTouched;
  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const firstNameBlurHandler = (event) => {
    setIsFirstNameInputFieldTouched(true);
  };
  const inputFirstNameDynamicClass = isEnteredFirstNameHasError
    ? "form-control invalid"
    : "form-control";
  // ================FIRST NAME VALIDATION CODE ENDS==============================

  //================LAST NAME VALIDATION CODE START==============================
  const [enteredLastName, setEnteredLastName] = useState("");
  const [isLastNameInputFieldTouched, setIsLastNameInputFieldTouched] =
    useState(false);
  const isEnteredLastNameValid = enteredLastName.trim() !== "";
  const isEnteredLastNameHasError =
    !isEnteredLastNameValid && isLastNameInputFieldTouched;
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const lastNameBlurHandler = (event) => {
    setIsLastNameInputFieldTouched(true);
  };

  const inputLastNameDynamicClass = isEnteredLastNameHasError
    ? "form-control invalid"
    : "form-control";
  //================LAST NAME VALIDATION CODE ENDS==============================

  //================EMAIL VALIDATION CODE START==============================
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailInputFieldTouched, setIsEmailInputFieldTouched] =
    useState(false);
  const isEnteredEmailValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const isEnteredEmailHasError =
    !isEnteredEmailValid && isEmailInputFieldTouched;
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = (event) => {
    setIsEmailInputFieldTouched(true);
  };

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
    setEnteredFirstName("");
    setIsFirstNameInputFieldTouched(false);
    setEnteredLastName("");
    setIsLastNameInputFieldTouched(false);
    setEnteredEmail("");
    setIsEmailInputFieldTouched(false);
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
export default BasicForm;
