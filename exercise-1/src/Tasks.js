import React from "react";
import useApi from "react-use-api";

import Task from "./Task";

const Tasks = () => {
  const [data, { loading, error }, request] = useApi({
    url: "/.netlify/functions/getTasks"
  });

  const tasks = data || [];

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
