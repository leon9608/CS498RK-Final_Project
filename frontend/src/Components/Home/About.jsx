import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Segments/Footer.jsx';

//TODO: 1. change stats to dynamically display data from database
// 2. Change the description for our team
class About extends Component {
  render() {
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
                                  <li className="nav-link"><Link to="/about" className="active">About</Link></li>
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
                      <h1 className="text-white font-weight-bold">About Us</h1>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-5 bg-image overlay-primary fixed overlay" id="next-section">
                <div className="container">
                  <div className="row mb-5 justify-content-center">
                    <div className="col-md-7 text-center">
                      <h2 className="section-title mb-2 text-white">ResearchBoard Site Stats</h2>
                    </div>
                  </div>
                  <div className="row pb-0 block__19738 section-counter justify-content-center">

                    <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                      <div className="d-flex align-items-center justify-content-center mb-2">
                        <strong className="number" data-number="1930">1930</strong>
                      </div>
                      <span className="caption">Students</span>
                    </div>

                    <div className="col-6 col-md-6 col-lg-3 mb-5 mb-lg-0">
                      <div className="d-flex align-items-center justify-content-center mb-2">
                        <strong className="number" data-number="54">54</strong>
                      </div>
                      <span className="caption">Researchs Posted</span>
                    </div>
                  </div>
                </div>
              </section>


              <section className="site-section pb-0">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                          <img src="http://illinoismarathon.com/wp-content/uploads/alma-mater-600x338.jpg" className="img-fluid img-shadow"/>
                    </div>
                    <div className="col-lg-5 ml-auto">
                      <h2 className="section-title mb-3">ResearchBoard For Undergrade Students</h2>
                      <p className="lead">Solving the students’ pain point of having scattered and incomplete information about on-campus research/intern related information/opportunities.</p>
                      <p>This platform will provide users a centralized and most up-to-date information.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="site-section pt-0">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0 order-md-2">
                        <img src="https://static1.squarespace.com/static/548b59b0e4b0c84e07f40b9d/548b6469e4b0ff83264132a3/56319d1ee4b05cc183adab82/1531275934314/DSC_0008_C.jpg?format=750w" className="img-fluid img-shadow"/>
                    </div>
                    <div className="col-lg-5 mr-auto order-md-1  mb-5 mb-lg-0">
                      <h2 className="section-title mb-3">ResearchBoard For Professors</h2>
                      <p className="lead">Solving the professors’ pain point of having a hard time to find an easy way to advertise for their job availabilities.</p>
                      <p>This platform will ease the process for recruiting and also provide a greater pool of candidates.</p>
                    </div>
                  </div>
                </div>
              </section>


              <section className="site-section">
                <div className="container">
                  <div className="row mb-5">
                    <div className="col-12 text-center" data-aos="fade">
                      <h2 className="section-title mb-3">Our Team</h2>
                    </div>
                  </div>

                  <div className="row mb-5">
                      <div className="col-md-6">
                        <h3>Jiaxuan Guo</h3>
                        <p className="text-muted">Full Stack Developer</p>
                        <p>Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel  ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.</p>
                      </div>

                      <div className="col-md-6">
                        <h3>Yuyang Liu</h3>
                        <p className="text-muted">Full Stack Developer</p>
                        <p>Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel  ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.</p>
                      </div>
                  </div>

                <div className="row mb-5">
                  <div className="col-md-6">
                    <h3>Jinyuan Li</h3>
                    <p className="text-muted">Front-End Developer</p>
                    <p>Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel  ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.</p>
                  </div>

                  <div className="col-md-6">
                    <h3>Yan Ye</h3>
                    <p className="text-muted">Front-End Developer</p>
                    <p>Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel  ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.</p>
                  </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-6">
                  <h3>Zhilin Zhang</h3>
                  <p className="text-muted">Front-End Developer</p>
                  <p>Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel  ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.</p>
                </div>
            </div>


            </div>
              </section>

              <Footer></Footer>
            </div>
      );
  }
}

export default About
