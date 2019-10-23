import React from "react";
import useApi from "react-use-api";

import Task from "./Task";

const Tasks = () => {
  const [data] = useApi({ url: "/.netlify/functions/getTasks" });
  const tasks = data && data.tasks || [];

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
