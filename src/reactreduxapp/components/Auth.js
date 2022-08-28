import React, { useRef } from "react";
import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/react-redux-toolkit";

const Auth = () => {
  const inputUsernameRef = useRef();
  const dispatch = useDispatch();
  const authenticationHandler = (event) => {
    event.preventDefault();
    const inputUsername = inputUsernameRef.current.value;
    dispatch(authActions.login(inputUsername));
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={authenticationHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={inputUsernameRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};
export default Auth;
