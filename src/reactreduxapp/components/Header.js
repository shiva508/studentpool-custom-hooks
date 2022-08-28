import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/react-redux-toolkit";
import { Fragment } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.userdetails.username);
  console.log(username);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const headerDynamicContent = isAuthenticated && (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );
  let usernamecontect = "";
  if (isAuthenticated) {
    usernamecontect = <Fragment>({username})</Fragment>;
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth{usernamecontect} </h1>
      {headerDynamicContent}
    </header>
  );
};

export default Header;
