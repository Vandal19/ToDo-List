import './App.css';
import React, { useEffect, useState } from "react";
import InputToDo from './components/InputToDo';
import ListToDo from './components/ListToDo';
import { Container } from "@mui/material";

function App() {
  return (
<Container>
  <InputToDo />
  <ListToDo />
</Container>
  );
}

export default App;
