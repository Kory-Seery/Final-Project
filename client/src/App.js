//import {useEffect} from "react"
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./Homepage"
import Globalstyles from "./Globalstyles";

const App = () => {
  return (
  <BrowserRouter>
  <Globalstyles/>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
