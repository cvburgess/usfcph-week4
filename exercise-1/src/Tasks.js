import React from "react";
import useAxios from "axios-hooks";

import Task from "./Task";

const Tasks = () => {
  const [{ data }] = useAxios("/.netlify/functions/getTasks");
  const tasks = (data && data.tasks) || [];

  return tasks.map(task => (
    <Task
      description={task.description}
      isUrgent={task.is_urgent}
      key={task.id}
      title={task.title}
    />
  ));
};

export default Tasks;
