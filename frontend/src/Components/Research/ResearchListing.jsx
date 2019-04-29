import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Segments/Footer.jsx';
import axios from 'axios';


class ResearchListing extends Component {
    constructor(props){
        super(props);
        this.state = {
            postList : []
        };
    }
  componentDidMount(){
      const postListApi = 'http://localhost:4000/api/posts';
      axios.get(postListApi).then(
          res => {
              this.setState({postList: res.data.data});
          }
      )
  }

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

            {/* NAVBAR */}
            <header className="site-navbar mt-3">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="site-logo col-6"><Link to="/">RESEARCHBOARD</Link></div>
                        <nav className="mx-auto site-navigation">
                            <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                <li className="nav-link"><Link to="/">Home</Link></li>
                                <li className="nav-link"><Link to="/about">About</Link></li>
                                <li className="nav-link"><Link to="/research-listing" className="active">Recent Opportunities</Link></li>
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

            {/*Home*/}
            <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: "url('https://www.chula.ac.th/wp-content/uploads/2018/03/research-impact-hero-768x480.jpg')"}} id="home-section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                        <div className="mb-5 text-center">
                          <h1 className="text-white font-weight-bold">Recent Opportunities Listings</h1>
                        </div>
                    </div>
                  </div>
                </div>
            </section>

            <section className="site-section" id="next">
              <div className="container">

                <ul className="job-listings mb-5">
                    {this.state.postList.map((post,idx) =>
                        <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center" key={idx}>
                          <Link to="/research-detail"></Link>

                          <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                            <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                              <h2>{post.jobName}</h2>
                              <strong>{post.description}</strong>
                            </div>
                            <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                                <span className="icon-contact_mail"></span>{post.contactName}
                            </div>
                            <div className="job-listing-meta">
                                <span className="icon-date_range"></span>{post.dateCreated}
                            </div>
                          </div>
                        </li>
                    )}

                </ul>

                <div className="row pagination-wrap">
                  <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
                    <span>Showing 1-7 Of 43,167 Jobs</span>
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


            <Footer></Footer>
        </div>
    );
}
}
export default ResearchListing
