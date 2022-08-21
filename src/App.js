import React, { Fragment } from "react";
import ForwardBackwordContainer from "./counterapp/Containers/ForwardBackwordContainer";
import TaskContainer from "./taskapp/containers/TaskContainer";
import FormsContainer from "./basicformapp/container/FormsContainer";
import MealsContainer from "./foodapp/containers/MealsContainer";

function App() {
  return (
    <Fragment>
      {/* <ForwardBackwordContainer /> */}
      {/* <TaskContainer></TaskContainer> */}
      {/* <FormsContainer /> */}
      <MealsContainer />
    </Fragment>
  );
}

export default App;
