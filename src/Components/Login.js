import React, { useState, Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [name, setName] = useState([{}]);
  const [password, setPassword] = useState([{}]);
  const navigate = useNavigate("");

  const handleSubmit = (e) => {

    const user = {
      name: name,
      password: password,
    };
    console.log(JSON.stringify(user));

    axios.post("/api/user/authenticate", user)
      .then(response => {
        console.log('--------------')
        console.log(response.data)
        console.log('--------------')
        if(response.data.data === "success"){
          console.log("I am in success")
          navigate("/");
        }
        
      })

    // fetch("http://localhost:5555/user/authenticate", requestOptions)
    //   .then(response => {
    //     console.log('--------------')
    //     console.log(response.text());
    //     console.log('--------------')
    //     return response;

    //   })
    //   .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <Fragment>
        <div className="header">
          <a href="#default" className="logo">
            Login Page
          </a>
          <div className="header-right">
            <a href="/">Home</a>
            <a href="/user">Register</a>
            <a href="/user/authenticate">Login</a>
          </div>
        </div>

        <div className="col-md-5 no-gutters leftside">
          <Form className="d-grip gap-1" style={{ margin: "4rem" }}>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              required
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form>

          <Form className="d-grip gap-1" style={{ margin: "4rem" }}>
            <Form.Control
              type="text"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form>

          <Button size="lg" onClick={(e) => handleSubmit(e)} type="button">
            Submit
          </Button>

          <br />
          <a href="/user">Don't have an account</a>
        </div>
      </Fragment>
    </div>
  );
}

export default Login;
