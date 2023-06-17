import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Components/Register.js";
import Login from "./Components/Login.js";
import Home from "./Components/Home.js"
import UserList from "./Components/UserList.js"
import ScholarshipReg from "./Components/ScholarshipReg.js";
import ScholarshipList from "./Components/ScholarshipList.js";
import Footer from "./Components/Footer.js";

function App()
{
  return(
  <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<Register/>}/>
          <Route path="/user/authenticate" element={<Login/>}/>
          <Route path="/userlist" element={<UserList/>}/>
          <Route path="/Scholarship" element={<ScholarshipReg/>}/>
          <Route path="/Scholarshiplist" element={<ScholarshipList/>}/>
          <Route path="/Footer" element={<Footer/>}/>
          
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
