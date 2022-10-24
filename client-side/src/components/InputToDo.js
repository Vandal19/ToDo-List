import React from "react";
import { useEffect, useState } from "react";
import axios from "axios"
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
  const [description, setDescription] = useState("")

  const submitFormHandler = async () => {
    // e.preventDefault();
    try {
      const response = await axios.post("/toDo", {description})
      console.log(response.data[0].description)
      setDescription((prevState) => {
        console.log(prevState)
        return [response.data[0].description]
      })
      // .then((res) => setDescription(res.data[0]))
      // .then((res) => console.log("res", res))
      // console.log(res.data)
      // window.location = "/";
    } catch (error) {
      console.error(error.response ? error.response.body : error);
    }
  }

  return (
    <Container maxWidth="xl">
      <Grid item
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
        <Grid item component="form" xs={10.5}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="What are you thinking of?"
            variant="outlined"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={1.5}>
          <Button onClick={submitFormHandler} variant="contained" size="large">
            Add
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InputToDo;
