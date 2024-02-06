//import {useEffect} from "react"
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./Homepage"
import Globalstyles from "./Globalstyles";
import Signup from "./Signup";
import Signin from "./Signin";
import Web from "./Web"
import Recommend from "./Recommend"
import { useState } from "react";


const App = () => {

const [currentUser, setcurrentuser] = useState("")


  return (
  <BrowserRouter>
  <Globalstyles/>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Signin" element={<Signin setcurrentuser={setcurrentuser}/>}/>
        <Route path="/Web" element={<Web currentUser={currentUser} setcurrentuser={setcurrentuser}/>}/>
        <Route path="/Recommend" element={<Recommend/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
