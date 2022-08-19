import React, { Fragment } from "react";
import ForwardBackwordContainer from "./counterapp/Containers/ForwardBackwordContainer";
import TaskContainer from "./taskapp/containers/TaskContainer";
import FormsContainer from "./basicformapp/container/FormsContainer";
function App() {
  return (
    <Fragment>
      {/* <ForwardBackwordContainer /> */}
      {/* <TaskContainer></TaskContainer> */}
      <FormsContainer />
    </Fragment>
  );
}

export default App;
