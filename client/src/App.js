//import {useEffect} from "react"
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./Homepage"
import Globalstyles from "./Globalstyles";
import Signup from "./Signup";
import Signin from "./Signin";
import Web from "./Web"
import Header from "./Header";

const App = () => {
  return (
  <BrowserRouter>
  <Header />
  <Globalstyles/>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Web" element={<Web/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
