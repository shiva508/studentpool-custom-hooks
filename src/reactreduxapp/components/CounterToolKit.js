import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/react-redux-toolkit";

const CounterToolKit = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const increamentHandler = () => {
    dispatch(counterActions.increament());
  };
  const decreamentHandler = () => {
    dispatch(counterActions.decreament());
  };
  const dynamicIncreamentHandler = () => {
    dispatch(counterActions.increate(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const counterconent = showCounter && (
    <div className={classes.value}>{counter}</div>
  );

  return (
    isAuthenticated && (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {counterconent}
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={dynamicIncreamentHandler}>Increament By 5</button>
        <button onClick={decreamentHandler}>Decreament</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    )
  );
};

export default CounterToolKit;
