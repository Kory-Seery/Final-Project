//import {useEffect} from "react"
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./Homepage"
import Globalstyles from "./Globalstyles";
import Signup from "./Signup";
import Signin from "./Signin";


const App = () => {
  return (
  <BrowserRouter>
  <Globalstyles/>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Signin" element={<Signin/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
