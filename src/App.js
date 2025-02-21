import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";

function App() {

  const Routing = () =>{
    return (
      <>
      {/*<BrowserRouter basename='/'>*/}
      <Router>
      <Routes>
        {/* Public Routes */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
     </Router>
      </>
    )
  }
 

  return (
    <Routing/>
  
  );
}

export default App;
