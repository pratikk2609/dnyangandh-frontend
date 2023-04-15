import React, { useState, Fragment } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function Home()
{
    return (

        <div className='App'>
            <Fragment>
                <div className="header">
                    <a href="#default" className="logo">Login Page</a>
                    <div className="header-right">
                        <a href="/">Home</a>
                        <a href="/user">Register</a>
                        <a href="/user/authenticate">Login</a>
                    </div>
    
                </div>
            </Fragment>
        </div>
    )
}

export default Home;