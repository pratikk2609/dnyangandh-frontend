import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Components/Register.js";
import Login from "./Components/Login.js";
import Home from "./Components/Home.js"

function App()
{
  return(
  <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<Register/>}/>
          <Route path="/user/authenticate" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
