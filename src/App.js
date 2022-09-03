import React, { Fragment } from "react";
import ForwardBackwordContainer from "./counterapp/Containers/ForwardBackwordContainer";
import TaskContainer from "./taskapp/containers/TaskContainer";
import FormsContainer from "./basicformapp/container/FormsContainer";
import MealsContainer from "./foodapp/containers/MealsContainer";
import ReactReducContainer from "./reactreduxapp/containers/ReactReducContainer";
import ReactAdvancedReduxContainer from "./reactreduxadvancedapp/containers/ReactAdvancedReduxContainer";
import { Provider } from "react-redux";
import cartAdvancedStore from "./reactreduxadvancedapp/store/react-redux-advanced";
function App() {
  return (
    <Fragment>
      {/* <ForwardBackwordContainer /> */}
      {/* <TaskContainer></TaskContainer> */}
      {/* <FormsContainer /> */}
      {/* <MealsContainer /> */}
      {/* <ReactReducContainer /> */}
      <Provider store={cartAdvancedStore}>
        <ReactAdvancedReduxContainer />
      </Provider>
    </Fragment>
  );
}

export default App;
