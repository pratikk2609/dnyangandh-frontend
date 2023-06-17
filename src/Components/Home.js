import React, { Fragment } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
<<<<<<< HEAD
import bg from '../images/bg.jpg'
import './Home.css'
import Footer from './Footer'
=======
>>>>>>> 2280497ea74397710cdf1afeb6409d784d438918

function Home() {
    return (

        <div className='App'>
            <Fragment>
                <div className="header">
                    <a href="#default" className="logo">Dnyangandh Pratishtan</a>
                    <div className="header-right">
                        <a href="/">Home</a>
                        <a href="/user">Register</a>
                        <a href="/scholarship">Scholarship</a>
                        <a href="/user/authenticate">Login</a>
                    </div>

                </div>
            </Fragment>
            <div className="img-home">
                <img src={bg} height="500px" width="100%" />
            </div>
            <div className="mission-container">
                <div>
                    <h3>Why we are here?</h3>
                    <h6>How we are going to help u?</h6>
                </div>
                <div>
                    <p>We as a Dnyangandh Team want to help students to identify their goals and achieve them. We will be providing necessary scholarships for them.</p>
                </div>
            </div>
            <div className="mission-details">
                <div className="mission-img">
                    <img src="" alt="Images describing the same" />
                </div>
                <div className="mission-tagline">
                    <h3>Events oraganised</h3>
                    <h6>Literacy Campaigns going on</h6>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;