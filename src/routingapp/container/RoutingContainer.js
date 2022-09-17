import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import Welcome from "../pages/Welcome";

const RoutingContainer = () => {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/product" exact>
            <Product></Product>
          </Route>
          <Route path="/product/:productod">
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
};

export default RoutingContainer;
