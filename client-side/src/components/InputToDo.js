import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const InputToDo = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        sx={{ m: 2 }}
      >
        <Typography variant="h4" align="center">
          ToDo List
        </Typography>
      </Grid>
      <Divider />
      <Grid
        container
        spacing={1}
        display="flex"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Grid component="form" xs={10}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="What are you thinking of?"
            variant="outlined"
          />
        </Grid>
        <Grid xs={2}>
          <Button variant="contained" size="large">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InputToDo;
