import React, { Fragment } from "react";
import Counter from "../components/Counter";
import CounterToolKit from "../components/CounterToolKit";
import Header from "../components/Header";
import Auth from "../components/Auth";
const ReactReducContainer = (props) => {
  return (
    <Fragment>
      {/* <Counter /> */}
      <Header />
      <Auth />
      <CounterToolKit />
    </Fragment>
  );
};
export default ReactReducContainer;
