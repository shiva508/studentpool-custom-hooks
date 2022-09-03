import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
const CartItem = (props) => {
  const cartDispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { title, quantity, total, price, id } = props.item;
  const addNewCartItemHandler = () => {
    const newTotalQuantity = cart.totalQuantity + 1;

    const updatedItems = cart.items.slice(); // create copy via slice to avoid mutating original state
    const existingItem = updatedItems.find((item) => item.id === id);
    if (existingItem) {
      const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
      updatedItem.quantity++;
      updatedItem.totalPrice = updatedItem.totalPrice + price;
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: id,
        price: price,
        quantity: 1,
        totalPrice: price,
        name: title,
      });
    }

    const newCart = {
      totalQuantity: newTotalQuantity,
      items: updatedItems,
    };
    cartDispatch(cartActions.replaceCart(newCart));

    //OLD Code
    //cartDispatch(cartActions.addItemToCart({ id, title, price }));
  };
  const removeCartItemHandler = () => {
    cartDispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartItemHandler}>-</button>
          <button onClick={addNewCartItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
