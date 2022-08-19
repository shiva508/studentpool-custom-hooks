import React, { Fragment } from "react";
import BackwardCounter from "../components/BackwardCounter";
import BackwardCounterHooks from "../components/BackwardCounterHooks";
import ForwardCounter from "../components/ForwardCounter";
import ForwardCounterHooks from "../components/ForwardCounterHooks";

const ForwardBackwordContainer = () => {
  return (
    <Fragment>
      <ForwardCounter />
      <BackwardCounter />
      <ForwardCounterHooks />
      <BackwardCounterHooks />
    </Fragment>
  );
};
export default ForwardBackwordContainer;
