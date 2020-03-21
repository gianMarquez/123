import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class Info extends Component { 
    render () {
        return(
            <>
                <section>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link to="/" className="navbar-brand">
                                <img src="../assets/images/logo.png" alt="logo" className="img "/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link to="/aboutus" className="nav-link"> ABOUT US </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://twitter.com/h2mcatalyst" target="_blank" className="nav-item">
                                            <i class="fa fa-twitter required"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.linkedin.com/company/h2mcatalyst/about/" target="_blank" className="nav-item">
                                            <i class="fa fa-linkedin required"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://www.instagram.com/h2mcatalyst/" target="_blank" className="nav-item">
                                            <i class="fa fa-instagram required"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                            LOGOUT
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                </section>
                <section className="loginForm">
                    <div className="row">
                        <div className="col-md-12 img1"></div>
                        <div className="col-md-12 img2"></div>
                        <div className="col-md-12 img3"></div>
                        <div className="col-md-12 img4"></div>
                        <div className="col-md-12 img5"></div>
                        <div className="col-md-12 img6"></div>
                        <div className="col-md-12 img7"></div>
                        <div className="col-md-12 img8"></div>
                        <div className="col-md-12 img9"></div>
                        <div className="col-md-12 img10"></div>
                        <div className="col-md-12 img11"></div>
                    </div>
                </section>
            </>
        )
    }
}
export default Info