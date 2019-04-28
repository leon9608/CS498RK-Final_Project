import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// 'Home' is already defined as the classNameName name, so provide an alias
// 'Home-header' from the SCSS file gets transformed to 'HomeHeader'
//    because '-' is not allowed in JS variable names

// import { Home as HomeCss, HomeHeader } from './Home.module.scss'

class Home extends Component {
  render() {
    return (
        //TODO: 1. fix a href; 2. fix background picture
        <div>
            <div id="overlayer"></div>
            <div className="loader">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>

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
                <header className="site-navbar mt-3">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="site-logo col-6"><a href="index.html">JobBoard</a></div>
                            <nav className="mx-auto site-navigation">
                                <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                    <li><a href="index.html" className="nav-link active">Home</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li className="has-children">
                                        <a href="job-listings.html">Job Listings</a>
                                        <ul className="dropdown">
                                            <li><a href="job-single.html">Recent Opportunities</a></li>
                                            <li><a href="post-job.html">Post a Job</a></li>
                                        </ul>
                                    </li>
                                    <li className="d-lg-none"><a href="post-job.html"><span className="mr-2">+</span> Post a Job</a></li>
                                    <li className="d-lg-none"><a href="login.html">Log In</a></li>
                                </ul>
                            </nav>

                            <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                                <div className="ml-auto">
                                    <a href="post-job.html" className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-add"></span>Post a Job</a>
                                    <a href="login.html" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log In</a>
                                </div>
                                <a href="#" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2"></span></a>
                            </div>
                        </div>
                    </div>
                </header>

                {/*Home*/}
                {/* TODO: Add background image style */}
                <section className="home-section section-hero overlay bg-image" id="home-section">

                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12">
                          <div className="mb-5 text-center">
                            <h1 className="text-white font-weight-bold">The Easiest Way To Get Your Dream Job</h1>
                          </div>
                          <form method="post" className="search-jobs-form">
                            <div className="row mb-5">
                              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                <select className="selectpicker" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="Select Your Major">
                                  <option>Aerospace Engineering</option>
                                  <option>Agricultural and Biological engineering</option>
                                  <option>Bioengineering</option>
                                  <option>Chemical & Biomolecular engineering</option>
                                  <option>Civil and environmental engineering</option>
                                  <option>Computer engineering</option>
                                  <option>Computer Science</option>
                                  <option>Electrical engineering</option>
                                  <option>Engineering mechanics</option>
                                  <option>Engineering Physics</option>
                                  <option>Industrial Engineering</option>
                                  <option>Materials Science and Engineering</option>
                                  <option>Mechanical Engineering</option>
                                  <option>Nuclear, Plasma, and Radiological Engineering</option>
                                  <option>Systems Engineering and Design</option>
                                </select>
                              </div>

                              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                <select className="selectpicker" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="Select Salary">
                                  <option> 0 - 10$/hour </option>
                                  <option> 11 - 15$/hour</option>
                                  <option> 15$+/hour</option>
                                </select>
                              </div>
                              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                <select className="selectpicker" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="Class Standing">
                                  <option> Freshman </option>
                                  <option> Sophomore</option>
                                  <option> Junior </option>
                                  <option> Senior</option>
                                </select>
                              </div>

                              <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                <button type="submit" className="btn btn-primary btn-lg btn-block text-white btn-search"><span className="icon-search icon mr-2"></span>Search Job</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <a href="#next" className="scroll-button smoothscroll">
                      <span className=" icon-keyboard_arrow_down"></span>
                    </a>

                </section>

                <section className="site-section" id="next">
                  <div className="container">

                    <div className="row mb-5 justify-content-center">
                      <div className="col-md-7 text-center">
                        <h2 className="section-title mb-2">Latest Job/Internship Listed</h2>
                      </div>
                    </div>

                    <ul className="job-listings mb-5">
                      <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                        <a href="job-single.html"></a>
                        <div className="job-listing-logo">
                          <img src="images/job_logo_1.jpg" alt="Free Website Template by Free-Template.co" class="img-fluid"/>
                        </div>

                        <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                          <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                            <h2>Product Designer</h2>
                            <strong>Adidas</strong>
                          </div>
                          <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                            <span className="icon-room"></span> New York, New York
                          </div>
                          <div className="job-listing-meta">
                            <span className="badge badge-danger">Part Time</span>
                          </div>
                        </div>

                      </li>
                      <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                        <a href="job-single.html"></a>
                        <div className="job-listing-logo">
                          <img src="images/job_logo_2.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid"/>
                        </div>

                        <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                          <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                            <h2>Digital Marketing Director</h2>
                            <strong>Sprint</strong>
                          </div>
                          <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                            <span className="icon-room"></span> Overland Park, Kansas
                          </div>
                          <div className="job-listing-meta">
                            <span className="badge badge-success">Full Time</span>
                          </div>
                        </div>
                      </li>

                      <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center">
                        <a href="job-single.html"></a>
                        <div className="job-listing-logo">
                          <img src="images/job_logo_3.jpg" alt="Free Website Template by Free-Template.co" className="img-fluid"/>
                        </div>

                        <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                          <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                            <h2>Back-end Engineer (Python)</h2>
                            <strong>Amazon</strong>
                          </div>
                          <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                            <span className="icon-room"></span> Overland Park, Kansas
                          </div>
                          <div className="job-listing-meta">
                            <span className="badge badge-success">Full Time</span>
                          </div>
                        </div>
                      </li>

                    </ul>

                    <div className="row pagination-wrap">
                      <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                        <span>Showing 1-3 Of 200 Jobs</span>
                      </div>
                      <div className="col-md-6 text-center text-md-right">
                        <div className="custom-pagination ml-auto">
                          <a href="#" className="prev">Prev</a>
                          <div className="d-inline-block">
                          <a href="#" className="active">1</a>
                          <a href="#">2</a>
                          <a href="#">3</a>
                          <a href="#">4</a>
                          </div>
                          <a href="#" className="next">Next</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* TODO: Add background image style */}
                <section className="py-5 bg-image overlay-primary fixed overlay">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h2 className="text-white">Looking For A Research?</h2>
                        <p className="mb-0 text-white lead">Sign up now and find the right job for you.</p>
                      </div>
                      <div className="col-md-3 ml-auto">
                        <a href="#" className="btn btn-warning btn-block btn-lg">Sign Up</a>
                      </div>
                    </div>
                  </div>
                </section>

                <footer className="site-footer">

                  <a href="#top" className="smoothscroll scroll-top">
                    <span className="icon-keyboard_arrow_up"></span>
                  </a>

                  <div className="container">
                    <div className="row mb-5">
                      <div className="col-6 col-md-3 mb-4 mb-md-0">
                        <h3>Search Trending</h3>
                        <ul className="list-unstyled">
                          <li><a href="#">Web Design</a></li>
                          <li><a href="#">Graphic Design</a></li>
                          <li><a href="#">Web Developers</a></li>
                          <li><a href="#">Python</a></li>
                          <li><a href="#">HTML5</a></li>
                          <li><a href="#">CSS3</a></li>
                        </ul>
                      </div>

                      <div className="col-6 col-md-3 mb-4 mb-md-0">
                        <h3>Portfolio</h3>
                        <ul className="list-unstyled">
                          <li><a href="#">Settings</a></li>
                        </ul>
                      </div>
                      <div className="col-6 col-md-3 mb-4 mb-md-0">
                        <h3>Contact Us</h3>
                        <div className="footer-social">
                          <a href="#"><span className="icon-facebook"></span></a>
                          <a href="#"><span className="icon-twitter"></span></a>
                          <a href="#"><span className="icon-instagram"></span></a>
                          <a href="#"><span className="icon-linkedin"></span></a>
                        </div>
                      </div>
                    </div>

                  </div>
                </footer>

            </div>
        </div>
    );
  }
}

export default Home
