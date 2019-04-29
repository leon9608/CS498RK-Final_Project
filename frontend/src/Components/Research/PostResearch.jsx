import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Segments/Footer.jsx';

class PostResearch extends Component {
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
                        <h1 className="text-white font-weight-bold">Post A New Research</h1>
                      </div>
                    </div>
                  </div>
                </section>


                <section className="site-section">
                  <div className="container">

                    <div className="row mb-5">
                      <div className="col-lg-12">
                        <form className="p-4 p-md-5 border rounded" method="post">
                          <h3 className="text-black mb-5 border-bottom pb-2">Job Details</h3>
                              <div className="form-group">
                                <label htmlFor="job-title">Job Title</label>
                                <input type="text" className="form-control" id="job-title" />
                              </div>

                              <div className="form-group">
                                <label for="description">Description</label>
                                <textarea className="form-control" id="description"/>
                              </div>


                          <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select className="selectpicker border rounded" id="type" data-style="btn-black" data-width="100%" data-live-search="true" title="Select Job Type">
                              <option>Grader/Class Assistant</option>
                              <option>User Study</option>
                              <option>Research Assistant</option>
                            </select>
                          </div>

                          <label htmlFor="major">Major</label>
                          <div className="form-group">
                            <select cclass="custom-select" size="15" id="major">
                                <option value="0">Aerospace Engineering</option>
                                <option value="1">Agricultural and Biological engineering</option>
                                <option value="2">Bioengineering</option>
                                <option value="3">Chemical & Biomolecular engineering</option>
                                <option value="4">Civil and environmental engineering</option>
                                <option value="5">Computer engineering</option>
                                <option value="6">Computer Science</option>
                                <option value="7">Electrical Engineering</option>
                                <option value="8">Engineering Mechanics</option>
                                <option value="9">Engineering Physics</option>
                                <option value="10">Industrial Engineering</option>
                                <option value="11">Materials Science and Engineering</option>
                                <option value="12">Mechanical Engineering</option>
                                <option value="13">Nuclear, Plasma, and Radiological Engineering</option>
                                <option value="14">Systems Engineering and design</option>
                            </select>
                        </div>

                        <label htmlFor="salary">Salary</label>
                        <div className="form-group">
                              <div class="custom-control custom-radio custom-control-inline">
                                  <input type="radio" id="salary0" name="salary0" class="custom-control-input"/>
                                  <label class="custom-control-label" htmlFor="salary0">$0~10/hr</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline">
                                  <input type="radio" id="salary1" name="salary1" class="custom-control-input"/>
                                  <label class="custom-control-label" htmlFor="salary1">$11~15/hr</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline">
                                  <input type="radio" id="salary2" name="salary2" class="custom-control-input"/>
                                  <label class="custom-control-label" htmlFor="salary2">$15+/hr</label>
                              </div>
                        </div>

                            <label htmlFor="standing">Standing</label>
                            <div className="form-group">
                              <select cclass="custom-select" size="4" id="standing">
                                  <option value="0">Freshman</option>
                                  <option value="1">Sophomore</option>
                                  <option value="2">Junior</option>
                                  <option value="3">Senior</option>
                              </select>
                            </div>

                            <label htmlFor="term">Term</label>
                            <div className="form-group">
                                <select cclass="custom-select" size="4" id="term">
                                    <option value="0">Spring</option>
                                    <option value="1">Summer</option>
                                    <option value="2">Fall</option>
                                    <option value="3">Winter</option>
                                </select>
                            </div>


                          <div className="form-group">
                            <label htmlFor="name">Contact Name</label>
                            <input type="text" className="form-control" id="name"/>
                          </div>

                          <div className="form-group">
                            <label htmlFor="email">Contact Email</label>
                            <input type="text" className="form-control" id="email"/>
                          </div>
                        </form>
                      </div>


                    </div>
                    <div className="row align-items-center">
                          <div className="col-6">
                            <a href="#" className="btn btn-block btn-primary btn-md">Save Job</a>
                          </div>
                    </div>
                  </div>
                </section>

            <Footer></Footer>
            </div>
        );
    }
}

export default PostResearch
