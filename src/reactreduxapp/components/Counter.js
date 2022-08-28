import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const increamentHandler = () => {
    dispatch({ type: "increament" });
  };
  const decreamentHandler = () => {
    dispatch({ type: "decreament" });
  };
  const dynamicIncreamentHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({
      type: "toggle",
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <button onClick={increamentHandler}>Increament</button>
      <button onClick={dynamicIncreamentHandler}>Increament By 5</button>
      <button onClick={decreamentHandler}>Decreament</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
