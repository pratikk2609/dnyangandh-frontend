import React, { Fragment } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function Home()
{
    return (

        <div className='App'>
            <Fragment>
                <div className="header">
                    <a href="#default" className="logo">Dnyangandh Pratishtan</a>
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