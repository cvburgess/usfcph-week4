import React from "react";
import { Grid } from "@material-ui/core";

import AddTask from "./AddTask";
import Navigation from "./Navigation";
import Task from "./Task";

const App = () => {
  const tasks = [];

  return (
    <div>
      <Navigation />

      <Grid container spacing={1}>
        {tasks.map(task => (
          <Task
            description={task.description}
            isUrgent={task.is_urgent}
            key={task.id}
            title={task.title}
          />
        ))}

        <AddTask />
      </Grid>
    </div>
  );
};

export default App;
