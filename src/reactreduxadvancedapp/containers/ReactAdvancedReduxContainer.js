import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout/Layout";
import Cart from "../components/Cart/Cart";
import Products from "../components/Shop/Products";
import axios from "axios";
import { layoutActions } from "../store/ui-slice";
import Notification from "../components/UI/Notification";

let isInitial = true;

const ReactAdvancedReduxContainer = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(
      layoutActions.showNotification({
        status: "pending",
        title: "Saving Data......",
        message: "Data is getting saved",
      })
    );
    axios
      .put(
        "https://tasks-a49eb-default-rtdb.asia-southeast1.firebasedatabase.app",
        cart
      )
      .then((res) => {
        dispatch(
          layoutActions.showNotification({
            status: "success",
            title: "Saved",
            message: "Data is saved",
          })
        );

        // dispatch(layoutActions.hideNotification());
      })
      .catch((err) => {
        dispatch(
          layoutActions.showNotification({
            status: "error",
            title: "Error",
            message: "Something went wrong",
          })
        );
      });
  }, [cart]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}

      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
};
export default ReactAdvancedReduxContainer;
