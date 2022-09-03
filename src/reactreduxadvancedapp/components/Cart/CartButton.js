import classes from "./CartButton.module.css";
import { layoutActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const uiDispatch = useDispatch();
  const toggleCartHandler = () => {
    console.log(layoutActions);
    uiDispatch(layoutActions.changeVisibility());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
