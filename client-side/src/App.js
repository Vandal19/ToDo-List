import './App.css';
import React, { useEffect, useState } from "react";
import InputToDo from './components/InputToDo';
import { Container } from "@mui/material";

function App() {
  return (
<Container>
  <InputToDo />
</Container>
  );
}

export default App;
