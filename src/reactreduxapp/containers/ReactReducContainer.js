import React, { Fragment } from "react";
import Counter from "../components/Counter";
import CounterToolKit from "../components/CounterToolKit";
import Header from "../components/Header";
import Auth from "../components/Auth";
import UserProfile from "../components/UserProfile";
import { useSelector } from "react-redux";
const ReactReducContainer = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const bodycontent = (
    <Fragment>
      <CounterToolKit />
      <UserProfile />
    </Fragment>
  );
  const authContent = <Auth />;
  return (
    <Fragment>
      {/* <Counter /> */}
      <Header />
      {!isAuthenticated && authContent}
      {isAuthenticated && bodycontent}
    </Fragment>
  );
};
export default ReactReducContainer;
