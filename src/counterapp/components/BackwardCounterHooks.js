import React from "react";
import useCounter from "../hooks/use-counter";
import Card from "./Card";

const BackwardCounterHooks = () => {
  const counter = useCounter(false);
  return <Card>{counter}</Card>;
};
export default BackwardCounterHooks;
