import React from "react";
import { Grid } from "@material-ui/core";
import { ApiProvider } from "react-use-api";

import AddTask from "./AddTask";
import Navigation from "./Navigation";
import Tasks from "./Tasks";

const App = () => (
  <ApiProvider>
    <Navigation />
    <Grid container spacing={1}>
      <Tasks />
      <AddTask />
    </Grid>
  </ApiProvider>
);

export default App;
