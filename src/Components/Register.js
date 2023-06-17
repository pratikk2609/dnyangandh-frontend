import React, { useState,Fragment } from "react"
import { Button,Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { useNavigate } from "react-router-dom";

function Register() {
    const[email,setEmail] = useState([{}])
    const[name,setName] = useState([{}])
    const[age,setAge] = useState([{}])
    const[gender,setGender] = useState([{}])
    const[number,setNumber] = useState([{}])
    const[address,setAddress] = useState([{}])
    const[password,setPassword] = useState([{}])
    const navigate = useNavigate("");
    //const[output,setOutput] = useState([{}])
    //const[data,setData] = useState([{}])
    //const baseURL = ""

    const handleSubmit = (e) => {
        const user =
        {
            "username": name,
            "password": password,
            "email": email,
            "age": age,
            "address" : address,
            "gender" : gender,
            "phone_number" : number,
            "role" : "student"
        }
        console.log(user)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch('http://localhost:5555/user', requestOptions)
            .then(response => {
                navigate("/user/authenticate")
            })
            .then(data => console.log("success"));
        }

    return(

    <div className='App'>
        <Fragment>
        <div className="header">
            <a href="#default" className="logo">Registration Page</a>
            <div className="header-right">
                <a href="/">Home</a>
                <a href="/user">Register</a>
                <a href="/user/authenticate">Login</a>
            </div>
            
        </div>

        <body>

            <div className="col-md-5 no-gutters leftside">

                <Form className="d-grip gap-1" style={{margin:"4rem"}}>
                    <Form.Control type="text" placeholder="Enter Name" required
                    onChange={(e) => setName(e.target.value)} ></Form.Control>
                </Form>

                <Form className="d-grip gap-1" style={{margin:"4rem"}}>
                    <Form.Control type="text" placeholder="Enter Email" required
                    onChange={(e) => setEmail(e.target.value)} ></Form.Control>
                </Form>

                <Form className="d-grip gap-1" style={{margin:"4rem"}}>
                    <Form.Control type="text" placeholder="Enter Age" required
                    onChange={(e) => setAge(e.target.value)} ></Form.Control>
                </Form>

                <Form className="d-grip gap-1" style={{margin:"4rem"}}>
                    <Form.Control type="text" placeholder="Enter Gender" required
                    onChange={(e) => setGender(e.target.value)} ></Form.Control>
                </Form>

                <Form className="d-grip gap-1" style={{margin:"4rem"}}>
                    <Form.Control type="text" placeholder="Enter Phone No." required
                    onChange={(e) => setNumber(e.target.value)} ></Form.Control>
                </Form>

                <Form className="d-grip gap-1" style={{margin:"4rem"}}>
                    <Form.Control type="text" placeholder="Enter Address" required
                    onChange={(e) => setAddress(e.target.value)} ></Form.Control>
                </Form>

                <Form className="d-grip gap-1" style={{margin:"4rem"}}>
                    <Form.Control type="password" placeholder="Enter Password" required
                    onChange={(e) => setPassword(e.target.value)} ></Form.Control>
                </Form>

                <Button size='lg' onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>

                <br/>
                <a href="/user/authenticate">Have an account</a>

            </div>
        </body>
        </Fragment>
    </div>
    )
}

export default Register;