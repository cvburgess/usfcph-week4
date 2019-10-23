import React from "react";
import { Grid } from "@material-ui/core";

import AddTask from "./AddTask";
import Navigation from "./Navigation";
import Tasks from "./Tasks";

const App = () => (
  <div>
    <Navigation />
    <Grid container spacing={1}>
      <Tasks />
      <AddTask />
    </Grid>
  </div>
);

export default App;
