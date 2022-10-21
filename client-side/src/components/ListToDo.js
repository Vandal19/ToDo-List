import React from 'react'
import {
  Button, Grid, Paper, ButtonBase, Typography, getListItemSecondaryActionClassesUtilityClass
} from "@mui/material";
import { useEffect, useState } from "react";

const ListToDo = () => {
  const getToDo = async () => {
    try {
      
    } catch (error) {

    }
  }

  useEffect(() => {
    getToDo()
  })
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 800,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="row" spacing={2}>
            <Grid item xs={10.5}>
              <Typography gutterBottom variant="subtitle1" component="div">
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Task
              </Typography>
            </Grid>
            <Grid item xs={1.5} display="flex" direction="column" >
              <Button  sx={{ cursor: 'pointer', mb: 1 }} variant="outlined">
                Edit
              </Button>
              <Button sx={{ cursor: 'pointer' }} variant="outlined" component="div">
              Delete
            </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ListToDo
