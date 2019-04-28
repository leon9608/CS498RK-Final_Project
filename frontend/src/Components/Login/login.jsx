import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// 'Home' is already defined as the classNameName name, so provide an alias
// 'Home-header' from the SCSS file gets transformed to 'HomeHeader'
//    because '-' is not allowed in JS variable names

// import { Home as HomeCss, HomeHeader } from './Home.module.scss'

class LoginPage extends Component {
  render() {
    return (
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

                {/* title section */}
                <section className="section-hero overlay inner-page bg-image" id="home-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7">
                        <h1 className="text-white font-weight-bold">Sign Up/Login</h1>
                        <div className="custom-breadcrumbs">
                          <a href="#">Home</a> <span className="mx-2 slash">/</span>
                          <span className="text-white"><strong>Log In</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="site-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 mb-5">
                        <h2 className="mb-4">Sign Up To JobBoard</h2>
                        <form action="#" className="p-4 border rounded">

                          <div className="row form-group">
                            <div className="col-md-12 mb-3 mb-md-0">
                              <label className="text-black" for="fname">Email</label>
                              <input type="text" id="fname" className="form-control" placeholder="Email address" />
                            </div>
                          </div>
                          <div className="row form-group">
                            <div className="col-md-12 mb-3 mb-md-0">
                              <label className="text-black" for="fname">Password</label>
                              <input type="password" id="fname" className="form-control" placeholder="Password" />
                            </div>
                          </div>
                          <div className="row form-group mb-4">
                            <div className="col-md-12 mb-3 mb-md-0">
                              <label className="text-black" for="fname">Re-Type Password</label>
                              <input type="password" id="fname" className="form-control" placeholder="Re-type Password" />
                            </div>
                          </div>

                          <div className="row form-group">
                            <div className="col-md-12">
                              <input type="submit" value="Sign Up" className="btn px-4 btn-primary text-white" />
                            </div>
                          </div>

                        </form>
                      </div>
                      <div className="col-lg-6">
                        <h2 className="mb-4">Log In To JobBoard</h2>
                        <form action="#" className="p-4 border rounded">

                          <div className="row form-group">
                            <div className="col-md-12 mb-3 mb-md-0">
                              <label className="text-black" for="fname">Email</label>
                              <input type="text" id="fname" className="form-control" placeholder="Email address" />
                            </div>
                          </div>
                          <div className="row form-group mb-4">
                            <div className="col-md-12 mb-3 mb-md-0">
                              <label className="text-black" for="fname">Password</label>
                              <input type="password" id="fname" className="form-control" placeholder="Password" />
                            </div>
                          </div>

                          <div className="row form-group">
                            <div className="col-md-12">
                              <input type="submit" value="Log In" className="btn px-4 btn-primary text-white" />
                            </div>
                          </div>

                        </form>
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

export default LoginPage
