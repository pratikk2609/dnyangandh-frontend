import React, { useState,Fragment } from "react"
import { Button,Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { useNavigate } from "react-router-dom";

function ScholarshipReg() {
    const[description,setDescription] = useState([{}])
    const[name,setName] = useState([{}])
    const navigate = useNavigate("");
    //const[output,setOutput] = useState([{}])
    //const[data,setData] = useState([{}])
    //const baseURL = ""

    const handleSubmit = (e) => {
        const user =
        {
            "name": name,
            "description": description,
        }
        console.log(user)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch('http://localhost:5555/scholarship', requestOptions)
            .then(response => {
                navigate("/scholarshipList")
            })
            .then(data => console.log("success"));
        }

    return(

    <div className='App'>
        <Fragment>
        <div className="header">
            <a href="#default" className="logo">Scholarship Page</a>
            <div className="header-right">
                <a href="/">Home</a>
                <a href="/user">Register</a>
            </div>
            
        </div>

        <body>

            <div className="col-md-5 no-gutters leftside">

                <Form className="d-grip gap-1" style={{margin:"4rem"}}>
                    <Form.Control type="text" placeholder="Enter Name" required
                    onChange={(e) => setName(e.target.value)} ></Form.Control>
                </Form>

                <Form className="d-grip gap-1" style={{margin:"4rem"}}>
                    <Form.Control type="text" placeholder="Enter Description" required
                    onChange={(e) => setDescription(e.target.value)} ></Form.Control>
                </Form>

                <Button size='lg' onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>

                <br/>
                

            </div>
        </body>
        </Fragment>
    </div>
    )
}

export default ScholarshipReg;