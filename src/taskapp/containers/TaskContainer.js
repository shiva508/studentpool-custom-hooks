import React, { Fragment, useState, useEffect, useCallback } from "react";
import NewTask from "../components/NewTask/NewTask";
import Tasks from "../components/Tasks/Tasks";
import axios from "axios";
const TaskContainer = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    axios
      .get(
        "https://tasks-a49eb-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"
      )
      .then((response) => {
        const data = response.data;
        const loadedTasks = [];
        for (const taskKey in response.data) {
          loadedTasks.push({
            taskid: taskKey,
            taskname: data[taskKey].taskname,
          });
        }
        setTasks(loadedTasks);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong!");
      });
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <Fragment>
      <NewTask onFetch={fetchTasks} onAddTask={taskAddHandler} />
      {tasks.length > 0 && (
        <Tasks
          items={tasks}
          loading={isLoading}
          error={error}
          onFetch={fetchTasks}
        />
      )}
    </Fragment>
  );
};
export default TaskContainer;
