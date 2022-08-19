import React from "react";
import tims from "./TaskItem.module.css";
const TaskItem = (props) => {
  return <li className={tims.task}>{props.children}</li>;
};
export default TaskItem;
