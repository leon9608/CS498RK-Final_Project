import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Segments/Footer.jsx';
import NavBar from '../Segments/NavBar.jsx';
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
                            <Link to={{pathname:"/research-detail", state:{loggedIn:loggedIn, userId:userId, isStudent:isStudent}}}></Link>

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
