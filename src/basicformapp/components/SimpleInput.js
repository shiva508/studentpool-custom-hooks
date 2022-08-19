import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameRef = useRef("");
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  //EMAIL VALIDATIONS
  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const inputNameBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const inputNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmitFormHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  //EMAIL VALIDATION CODE CODE

  const inputEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const inputEmailBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const nameInputClass = nameInputIsValid
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputIsValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitFormHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          ref={enteredNameRef}
          value={enteredName}
          onBlur={inputNameBlurHandler}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={inputEmailChangeHandler}
          onBlur={inputEmailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsValid && (
          <p className="error-text">
            Email must not be empty And Should be valid
          </p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
