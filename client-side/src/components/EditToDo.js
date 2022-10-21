import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";

const EditToDo = (todo) => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState(todo.todo.description);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setDescription(todo.todo.description);
    setOpen(false);
  };

  const editToDo = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`/toDo/${todo.todo.id}`, { description })
        .then((res) => setDescription(res.description));
      window.location = "/";
    } catch (error) {
      console.error(error.response ? error.response.body : error);
    }
  };

  return (
    <div>
      <Button
        sx={{ cursor: "pointer", mb: 1, width: 90, backgroundColor: "orange" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ width: 500 }}>Edit to Do</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Edit your task here"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={(e) => editToDo(e)}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditToDo;
