import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";
const Checkout = (props) => {
  const nameInputRef = useRef("");
  const streetInputRef = useRef("");
  const postalInputRef = useRef("");
  const cityInputRef = useRef("");
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const isEmpty = (input) => input.trim() === "";
  const isValidPostalCode = (input) => input.trim().length !== 6;
  const onConfirmHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postal = postalInputRef.current.value;
    const city = cityInputRef.current.value;
    const isValidName = !isEmpty(name);
    const isValidStreet = !isEmpty(street);
    const isValidPostal = !isValidPostalCode(postal);
    const isValidCity = !isEmpty(city);
    console.log("isValidName:" + isValidName);
    console.log("isValidStreet:" + isValidStreet);
    console.log("isValidPostal:" + isValidPostal);
    console.log("isValidCity:" + isValidCity);
    if (isValidName && isValidStreet && isValidPostal && isValidCity) {
      props.onConfirmOrder({
        name: name,
        street: street,
        postal: postal,
        city: city,
      });
    } else {
      setFormInputValidity({
        name: isValidName,
        street: isValidStreet,
        postal: isValidPostal,
        city: isValidCity,
      });
    }
  };

  const nameControlClass = `${classes.control} ${
    !formInputValidity.name ? classes.invalid : ""
  }`;
  const streetControlClass = `${classes.control} ${
    !formInputValidity.street ? classes.invalid : ""
  }`;
  const postalControlClass = `${classes.control} ${
    !formInputValidity.postal ? classes.invalid : ""
  }`;
  const cityControlClass = `${classes.control} ${
    !formInputValidity.city ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={onConfirmHandler}>
      <div className={nameControlClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter valid name</p>}
      </div>
      <div className={streetControlClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter valid street</p>}
      </div>
      <div className={postalControlClass}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postal && <p>Please enter valid postal code</p>}
      </div>
      <div className={cityControlClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
