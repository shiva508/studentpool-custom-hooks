import React, { useState } from "react";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

import axios from "axios";

const NewTask = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDataSaved, setIsDataSaved] = useState(false);

  const saveTaskHandler = (taskdata) => {
    setIsLoading(true);
    setError(null);
    const taskObject = {
      taskname: taskdata,
      taskid: Math.floor(Math.random() * 1000) + 1,
    };
    axios
      .post(
        "https://tasks-a49eb-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        taskObject
      )
      .then((respose) => {
        console.log(respose);
        setIsDataSaved(true);
        setIsLoading(false);
        props.onFetch();
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
      });
  };
  return (
    <Section>
      <TaskForm onTaskEntered={saveTaskHandler} loading={isLoading}></TaskForm>
      {error && <p>{error}</p>}
      {isDataSaved && <p>Data Saved </p>}
    </Section>
  );
};
export default NewTask;
