import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Home/>
    </>
  );


}

export default App;
