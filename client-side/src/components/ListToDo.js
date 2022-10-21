import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import EditToDo from "./EditToDo"
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const ListToDo = () => {
  const [toDos, setToDos] = useState([]);

  const deleteToDo = async (id) => {
    try {
      await axios.delete(`/toDo/${id}`)
      .then(setToDos(toDos.filter(todo => todo.id !== id)));
    } catch (error) {
      console.error(error.response ? error.response.body : error);
    }
  }

  const getToDo = async () => {
    try {
      const response = await axios.get("/toDo");
      setToDos(response.data);
    } catch (error) {
      console.error(error.response ? error.response.body : error);
    }
  };

  useEffect(() => {
    getToDo();
  }, []);
  // console.log(toDos);

  return (
    <Container maxWidth="xl">
      <Grid
        container
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
          key={todo.id}
        >
            <Grid container direction="row" spacing={1.5} >
              <Grid
                item
                xs={10.5}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Typography gutterBottom variant="subtitle1" component="div">
                  No: {todo.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {todo.description}
                </Typography>
              </Grid>
              <Grid
                item
                xs={1.5}
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                {/* <Button */}
                  {/* sx={{ cursor: "pointer", mb: 1, width: 90,}}
                  variant="outlined"
                > */}
                  <EditToDo todo={todo}/>
                {/* </Button> */}
                <Button
                  sx={{ cursor: "pointer", width: 90, backgroundColor: "red" }}
                  variant="contained"
                  onClick={() => deleteToDo(todo.id)}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
        </Paper>
      ))}
      <Divider />
    </Container>
  );
};

export default ListToDo;
