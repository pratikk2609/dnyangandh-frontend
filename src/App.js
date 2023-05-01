import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Components/Register.js";
import Login from "./Components/Login.js";
import Home from "./Components/Home.js"
import UserList from "./Components/UserList.js"

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
          
        </Routes>
      </BrowserRouter>
  </div>
  );

//   return <>
//   <table>
//       <thead>
//       <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Address</th>
//       </tr>
//       </thead>
//       <tbody>
//       <UserData user={user}/>
//       </tbody>
//   </table>
// </>
}

export default App;
