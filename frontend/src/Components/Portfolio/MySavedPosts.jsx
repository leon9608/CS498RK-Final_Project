import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Segments/Footer.jsx';
import NavBar from '../Segments/NavBar.jsx';
import ResearchList from '../Segments/ResearchList.jsx';

import axios from 'axios';

class MySavedPosts extends Component {

    /* todo :
                return user's saved(favorite) posts
                can be similar in structure to ResearchListing */
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
                            <div className="filters text-center button-group col-md-7 ">
                            <Link to="/portfolio"><button className="btn btn-primary active "> Account Settings</button></Link>
                              <Link to="/saved-posts"><button className="btn btn-primary ">My Saved Posts</button></Link>
                            </div>
                          </div>

                          

                          <Footer></Footer>
                      </div>
        );
    }


}

export default MySavedPosts
