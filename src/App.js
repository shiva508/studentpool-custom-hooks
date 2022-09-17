import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ForwardBackwordContainer from "./counterapp/Containers/ForwardBackwordContainer";
import TaskContainer from "./taskapp/containers/TaskContainer";
import FormsContainer from "./basicformapp/container/FormsContainer";
import MealsContainer from "./foodapp/containers/MealsContainer";
import ReactReducContainer from "./reactreduxapp/containers/ReactReducContainer";
import ReactAdvancedReduxContainer from "./reactreduxadvancedapp/containers/ReactAdvancedReduxContainer";
import { Provider } from "react-redux";
import cartAdvancedStore from "./reactreduxadvancedapp/store/react-redux-advanced";
import Welcome from "./routingapp/pages/Welcome";
import Product from "./routingapp/pages/Product";
import MainHeader from "./routingapp/components/MainHeader";
import ProductDetails from "./routingapp/pages/ProductDetails";
import RoutingContainer from "./routingapp/container/RoutingContainer";
import QuotsAppContainer from "./quotesroutingapp/container/QuotsAppContainer";

function App() {
  return (
    <Fragment>
      {/* <ForwardBackwordContainer /> */}
      {/* <TaskContainer></TaskContainer> */}
      {/* <FormsContainer /> */}
      {/* <MealsContainer /> */}
      {/* <ReactReducContainer /> */}
      {/* <Provider store={cartAdvancedStore}>
        <ReactAdvancedReduxContainer />
      </Provider> */}
      <QuotsAppContainer />
    </Fragment>
  );
}

export default App;
