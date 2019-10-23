import React, { useState } from "react";
import {
  Button,
  IconButton,
  TextField,
  Grid,
  InputAdornment,
  Paper
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: 16
  }
});

const AddTask = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  return (
    <Grid item xs={12}>
      <Paper className={classes.container}>
        <TextField
          label="New Task"
          fullWidth
          value={value}
          onChange={event => setValue(event.target.value)}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => {}}>
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Paper>
    </Grid>
  );
};

export default AddTask;
