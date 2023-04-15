import React, { useState, Fragment } from "react"
import { Button, Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function Login() {
    const [name, setName] = useState([{}])
    const [email, setEmail] = useState([{}])
    const [password, setPassword] = useState([{}])

    const handleSubmit = (e) => {
        console.log(name)
        console.log(email)
        console.log(password)
    }

    return (

        <div className='App'>
            <Fragment>
                <div className="header">
                    <a href="#default" className="logo">Login Page</a>
                    <div className="header-right">
                        <a href="/">Home</a>
                        <a href="/register">Register</a>
                        <a href="/login">Login</a>
                    </div>

                </div>

                <body>

                    <div className="col-md-5 no-gutters leftside">

                        <Form className="d-grip gap-1" style={{ margin: "4rem" }}>
                            <Form.Control type="text" placeholder="Enter Name" required
                                onChange={(e) => setName(e.target.value)} ></Form.Control>
                        </Form>

                        <Form className="d-grip gap-1" style={{ margin: "4rem" }}>
                            <Form.Control type="text" placeholder="Enter Email" required
                                onChange={(e) => setEmail(e.target.value)} ></Form.Control>
                        </Form>

                        <Form className="d-grip gap-1" style={{ margin: "4rem" }}>
                            <Form.Control type="text" placeholder="Enter Password" required
                                onChange={(e) => setPassword(e.target.value)} ></Form.Control>
                        </Form>

                        <Button size='lg' onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>

                    </div>

                </body>
            </Fragment>

        </div>
    )
}

export default Login