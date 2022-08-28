import React, { Fragment } from "react";
import ForwardBackwordContainer from "./counterapp/Containers/ForwardBackwordContainer";
import TaskContainer from "./taskapp/containers/TaskContainer";
import FormsContainer from "./basicformapp/container/FormsContainer";
import MealsContainer from "./foodapp/containers/MealsContainer";
import ReactReducContainer from "./reactreduxapp/containers/ReactReducContainer";

function App() {
  return (
    <Fragment>
      {/* <ForwardBackwordContainer /> */}
      {/* <TaskContainer></TaskContainer> */}
      {/* <FormsContainer /> */}
      {/* <MealsContainer /> */}
      <ReactReducContainer />
    </Fragment>
  );
}

export default App;
