import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class Home extends Component { 
    render () {
        return(
            <>
                <section>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand">
                            <img src="../assets/images/logo.png" alt="logo" className="img"/>
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
                                            <i class="fa fa-twitter required" ></i>
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
                                        LOGIN
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </section>
                <section>
                    <div className="row">
                        <div className="col-md-12 bg">
                            <h1 className="text-center head">H2M Catalyst</h1>
                            <br/>
                            <div className="boxed">
                            <h5 className="para">
                            H2M Catalyst is a company skillset improvement fund transforming established business process service companies into dynamic, digital enterprises with proprietary integrated automated platforms (IAP).
                            </h5>
                            </div>
                            <button className="but">
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row grBg">
                        <div className="container">
                        <h2>Industrial Disruption</h2>
                        <br/>
                            <h5>
                            Business Process Outsourcing (BPO) companies providing lower level services such as call center and customer service can greatly increase enterprise value by creating internal software engineers enabling company to offer higher level of services such as HR, Finance, Development, Logistics and more.

                            </h5>
                            <br/>
                            {/* <p className="greyText">
                                -Satya Nadella, CEO, Microsoft <br /> <br />
                                2019 Mobile World Congress
                            </p> */}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row space-top">
                        <div className="col-md-12">
                            <h2 className="text-center head1"> Transforming Enterprises</h2>
                            <h5 className="head2">
                                <span className="spTxt">
                                    By transforming employee skillset.
                                </span>
                            </h5>
                        </div>
                        <div className="row mar space-bottom">
                            <div className="col-md-3">
                                <img src="../assets/images/icon/diamond.png" width="20%" className="icon" alt="diamond"/>
                                <h5 className="text-center"> Increase Value</h5>
                                <br/>
                                <p className="text-center">
                                    BPO companies providing lower level services can greatly increase enterprise value by creating internal software engineers enabling company to offer higher level of services.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <img src="../assets/images/icon/compas.png" width="20%" className="icon" alt="compas" />
                                <br/>
                                <h5 className="text-center"> Proven Formula </h5>
                                <br/>
                                <p className="text-center">
                                    Two of the largest global BPO companies have proven this premise. 
                                </p>
                            </div>
                            <div className="col-md-3">
                                <img src="../assets/images/icon/scale.png" width="20%" className="icon" alt="scale"/>
                                <br/>
                                <h5 className="text-center"> Scalability</h5>
                                <br/>
                                <p className="text-center">
                                    We can replicate within the fragmented BPO Industry.
                                </p>
                            </div>
                            <div className="col-md-3">
                                <img src="../assets/images/icon/ship.png" width="20%" className="icon" alt="ship" />
                                <br/>
                                <h5 className="text-center"> Increase Value</h5>
                                <br/>
                                <p className="text-center">
                                    Our mission is to acquire targeted BPO companies, increase revenue and profit by enabling staff to offer higher level services, and lower costs by sharing services among the acquired companies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
               
                <section>
                    <div className="row">
                        <div className="col-md-12 bg1"> </div>
                    </div>
                </section>
               
                <footer>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="../assets/images/logo.png" alt="logo" className="img"/>
                        </div>
                        <div className="col-md-4">
                            <h4>CONTACT</h4>
                            <p>
                                <strong>H2M Catalyst</strong>
                                <br />
                                7659 S. Main Street
                                <br />
                                Midvale UT 84047
                            </p>
                            <p>
                                801.808.2332
                                <br />
                                info@h2-m.com
                            </p>
                        </div>
                        <div className="col-md-4">
                            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1412097599127!2d-111.89826568445254!3d40.427871979363715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752802ed15066bf%3A0x297af19778ecbd86!2s2912%20Executive%20Pkwy%20%23220%2C%20Lehi%2C%20UT%2084043%2C%20USA!5e0!3m2!1sen!2s!4v1584700624695!5m2!1sen!2s"  frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
export default Home