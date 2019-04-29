import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Segments/Footer.jsx';

class ResearchDetail extends Component {
    render(){
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
                    <header className="site-navbar mt-3">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="site-logo col-6"><Link to="/">RESEARCHBOARD</Link></div>
                                <nav className="mx-auto site-navigation">
                                    <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                        <li className="nav-link"><Link to="/">Home</Link></li>
                                        <li className="nav-link"><Link to="/about">About</Link></li>
                                        <li className="nav-link"><Link to="/research-listing">Recent Opportunities</Link></li>
                                    </ul>
                                </nav>

                                <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                                    <div className="ml-auto">
                                        {/*<a href="post-job.html" className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-add"></span>Post a Job</a>*/}
                                        <div className="btn-group" role="group">
                                            <Link to="/login">
                                                <button type="button" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log In</button>
                                            </Link>
                                            <Link to="/register">
                                                <button type="button" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-person_add"></span>Sign Up</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <Link to="#" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2"></span></Link>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: "url('https://www.chula.ac.th/wp-content/uploads/2018/03/research-impact-hero-768x480.jpg')"}} id="home-section">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12 text-center">
                            <h1 className="text-white font-weight-bold">Detail</h1>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="site-section">
                      <div className="container">
                         <div className="row mb-5">
                             <div className="col-lg-2 mb-4 mb-lg-0">
                             <Link to="/research-listing" className="btn btn-block btn-primary btn-md"><span className="icon-keyboard_arrow_left mr-2"></span>Back</Link>
                             </div>
                         </div>
                        <div className="row align-items-center mb-5">
                          <div className="col-lg-8 mb-4 mb-lg-0">
                            <div className="d-flex align-items-center">
                              <div>
                                <h2>Product Designer</h2>
                                <div>
                                  <span className="ml-0 mr-2 mb-2"><span className="icon-briefcase mr-2"></span>Puma</span>
                                  <span className="m-2"><span className="icon-room mr-2"></span>New York City</span>
                                  <span className="m-2"><span className="icon-clock-o mr-2"></span><span class="text-primary">Full Time</span></span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="row">
                              <div className="col-6">
                                <a href="#" className="btn btn-block btn-light btn-md"><span className="icon-heart-o mr-2 text-danger"></span>Save Job</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="mb-5">
                              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3"></span>Description</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus.</p>
                              <p>Velit unde aliquam et voluptas reiciendis non sapiente labore, deleniti asperiores blanditiis nihil quia officiis dolor vero iste dolore vel molestiae saepe. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!</p>
                            </div>
                            <div className="mb-5">
                              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-rocket mr-3"></span>Requirement</h3>
                              <ul className="list-unstyled m-0 p-0">
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Necessitatibus quibusdam facilis</span></li>
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Velit unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente labore</span></li>
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Commodi quae ipsum quas est itaque</span></li>
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></li>
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Deleniti asperiores blanditiis nihil quia officiis dolor</span></li>
                              </ul>
                            </div>

                            <div className="mb-5">
                              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span class="icon-turned_in mr-3"></span>Contact Info</h3>
                              <ul className="list-unstyled m-0 p-0">
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Necessitatibus quibusdam facilis</span></li>
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Velit unde aliquam et voluptas reiciendis non sapiente labore</span></li>
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Commodi quae ipsum quas est itaque</span></li>
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></li>
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Deleniti asperiores blanditiis nihil quia officiis dolor</span></li>
                              </ul>
                            </div>

                          </div>
                          <div className="col-lg-4">
                            <div className="bg-light p-3 border rounded mb-4">
                              <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
                              <ul className="list-unstyled pl-3 mb-0">
                                <li className="mb-2"><strong className="text-black">Published on:</strong> April 14, 2019</li>
                                <li className="mb-2"><strong className="text-black">Employment Status:</strong> Full-time</li>
                                <li className="mb-2"><strong className="text-black">Experience:</strong> 2 to 3 year(s)</li>
                                <li className="mb-2"><strong className="text-black">Salary:</strong> $60k - $100k</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="bg-light pt-5 testimony-full">
                        <div className="owl-carousel single-carousel">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-6 align-self-center text-center text-lg-left">
                                <blockquote>
                                  <p>&ldquo;Research is to see what everybody else has seen, and to think what nobody else has thought.&rdquo;</p>
                                  <p><cite> &mdash; Albert Szent-Gyorgyi</cite></p>
                                </blockquote>
                              </div>
                            </div>
                          </div>

                          <div className="container">
                            <div className="row">
                              <div className="col-lg-6 align-self-center text-center text-lg-left">
                                <blockquote>
                                  <p>&ldquo;It always seems impossible until it's done.&rdquo;</p>
                                  <p><cite> &mdash; Nelson Mandela</cite></p>
                                </blockquote>
                              </div>
                            </div>
                          </div>

                          <div className="container">
                            <div className="row">
                              <div className="col-lg-6 align-self-center text-center text-lg-left">
                                <blockquote>
                                  <p>&ldquo;Do not be afraid to ask for help. Nobody gets through college on their own.&rdquo;</p>
                                  <p><cite> &mdash; Michelle Obama</cite></p>
                                </blockquote>
                              </div>
                            </div>
                          </div>
                      </div>
                    </section>

                    <Footer></Footer>
            </div>


        );
    }
}

export default ResearchDetail
