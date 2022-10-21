import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  ButtonBase,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const ListToDo = () => {
  const [toDos, setToDo] = useState([]);

  const getToDo = async () => {
    try {
      const response = await axios.get("/toDo");
      setToDo(response.data);
    } catch (error) {
      console.error(error.response ? error.response.body : error);
    }
  };

  useEffect(() => {
    getToDo();
  }, []);
  console.log(toDos);

  // const item = toDos.map(todo => (
  //   <Typography variant="body2" color="text.secondary">
  //   {todo.description}
  // </Typography>
  // ))

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
          Pending To Do List
        </Typography>
      </Grid>
      <Divider />
      {toDos.map((todo) => (
        <Paper
          sx={{
            p: 2,
            mt: 2,
            // margin: 'auto',
            maxWidth: 1100,
            // flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid
            key={todo.id}
            xs={12}
            container
            spacing={1}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            {/* <Grid container spacing={1.5}> */}
              <Grid container direction="row" spacing={1.5}>
                <Grid item xs={10.5} display="flex" direction="column"
            justifyContent="center"
            alignItems="flex-start">
                  <Typography gutterBottom variant="subtitle1" component="div">
                    No: {todo.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {todo.description}
                  </Typography>
                </Grid>
                <Grid item xs={1.5} display="flex" direction="column"
          justifyContent="center"
          flexDirection="column"
          alignItems="center">
                  <Button sx={{ cursor: "pointer", mb: 1, width: 90}} variant="outlined">
                    Edit
                  </Button>
                  <Button sx={{ cursor: "pointer", width: 90}} variant="outlined">
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          {/* </Grid> */}
        </Paper>
      ))}
      <Divider />
    </Container>
  );
};

export default ListToDo;
