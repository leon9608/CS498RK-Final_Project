import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Segments/Footer.jsx';
import NavBar from '../Segments/NavBar.jsx';
import ResearchList from '../Segments/ResearchList.jsx';

import axios from 'axios';

class MyPortfolio extends Component {

    /* TODO:
    need to make "Porfolio" option appear in the nav bar once the user has logged in.
    need to report the updated information (name, email, password) back to server */


  render() {
    console.log(this)
      let loggedIn = false, userId, isStudent;
      if(typeof this.props.location.state != "undefined"){
          loggedIn = this.props.location.state.loggedIn;
          userId = this.props.location.state.userId;
          isStudent = this.props.location.state.isStudent;
      }
    return (
        <div className="site-wrap">
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            {/* NAVBAR */}
             <NavBar loggedIn={loggedIn} isStudent={isStudent} userId={userId} curPage={2}/>

            {/*Home*/}
            <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: "url('https://www.chula.ac.th/wp-content/uploads/2018/03/research-impact-hero-768x480.jpg')"}} id="home-section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                        <div className="mb-5 text-center">
                          <h1 className="text-white font-weight-bold"> My Portfolio</h1>
                        </div>
                    </div>
                  </div>
                </div>
            </section>

            <div className="row justify-content-center mb-5" data-aos="fade-up">
              <div id="btn-indicator" className="filters text-center button-group col-md-7 ">
              <Link to="/portfolio"><button className="btn btn-primary active "> Account Settings</button></Link>
                <Link to="/saved-posts"><button className="btn btn-primary ">My Saved Posts</button></Link>
              </div>
            </div>

            <section className="site-section move-up-slightly">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="mb-4">Update my information</h2>

                                <div className="row form-group justify-content-center">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="text-black" htmlFor="fname">User Name</label>
                                        <input type="text" id="fname" className="form-control" placeholder="Your Name"/>
                                    </div>
                                </div>

                                <div className="row form-group justify-content-center">
                                  <div className="col-md-12 mb-3 mb-md-0">
                                    <label className="text-black" htmlFor="fname">Email</label>
                                    <input type="text" id="fname" className="form-control" placeholder="Email address" />
                                  </div>
                                </div>



                                <div className="row form-group justify-content-center">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="text-black" htmlFor="password">New Password</label>
                                        <input type="password" id="password" className="form-control" placeholder="Password"/>
                                    </div>
                                </div>

                                <div className="row form-group justify-content-center">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="text-black" htmlFor="confirmedPassowrd">Re-Type New Password</label>
                                        <input type="password" id="confirmedPassowrd" className="form-control" placeholder="Re-type Password"/>
                                    </div>
                                </div>

                                <div className="row form-group justify-content-center">
                                    <div className="col-md-6">
                                        <input type="submit" value="Save Changes" className="btn px-4 btn-primary btn-block text-white" />
                                    </div>
                                </div>

                                 <div className="dropdown-divider"></div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}
}
export default MyPortfolio
