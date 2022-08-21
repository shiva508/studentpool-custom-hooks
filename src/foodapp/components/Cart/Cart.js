import { useContext, useState } from "react";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../../UI/Modal";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import axios from "axios";

const Cart = (props) => {
  const [isOrderReady, setIsOrderReady] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsOrderReady(true);
  };
  const submitOrderHandler = (userdata) => {
    setIsSubmitting(true);
    axios
      .post(
        "https://tasks-a49eb-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        {
          user: userdata,
          orderItems: cartCtx.items,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(userdata);
    setIsSubmitting(false);
    props.onClose();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrderReady && (
        <Checkout
          onConfirmOrder={submitOrderHandler}
          onCancel={props.onClose}
        />
      )}
      {!isOrderReady && modalAction}
    </Modal>
  );
};
export default Cart;
