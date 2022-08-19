import React from "react";
import tsms from "./Tasks.module.css";
import Section from "../UI/Section";
import TaskItem from "./TaskItem";
const Tasks = (props) => {
  console.log(props);
  let taskList = <h2>No tasks found. Start adding some!</h2>;
  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem key={task.taskid}>{task.taskname}</TaskItem>
        ))}
      </ul>
    );
  }
  let content = taskList;
  if (props.error) {
    content = <button onClick={props.onFetch}></button>;
  }
  if (props.loading) {
    content = "Loading tasks...";
  }
  return (
    <Section>
      <div className={tsms.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
