import React, { useRef } from "react";
import tfms from "./TaskForm.module.css";

const TaskForm = (props) => {
  const taskInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = taskInputRef.current.value;
    if (enteredValue.trim().length > 0) {
      props.onTaskEntered(enteredValue);
      taskInputRef.current.value = "";
    }
  };

  return (
    <form className={tfms.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef}></input>
      <button>{props.loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};
export default TaskForm;
