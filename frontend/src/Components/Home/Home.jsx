import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Footer from '../Segments/Footer.jsx';
import NavBar from '../Segments/NavBar.jsx';

class Home extends Component {
        state = {
            postList : [],
            loggedIn: false,
            userId: "",
            isStudent: true
        };

  componentDidMount(){
      const postListApi = 'http://localhost:4000/api/posts';
      axios.get(postListApi).then(
          res => {
              this.setState({postList: res.data.data});
          }
      )
      if(typeof this.props.location.state != "undefined"){
            this.setState({loggedIn: this.props.location.state.loggedIn,
                userId: this.props.location.state.userId,
                isStudent: this.props.location.state.isStudent});
    }
  }

  //TODO: Finish search
  onSubmit = (e) => {
      e.preventDefault();

      const getPostApi = 'http://localhost:4000/api/posts';
      this.props.history.push({
          pathname: '/search-result',
          state: {loggedIn: this.state.loggedIn,
                  userId:this.state.userId,
                  isStudent:this.state.isStudent,
                  postList:this.state.postList
              }
      });
  }

  render() {

      const { loggedIn, isStudent, userId } = this.state;

      let BottomSignUp;
      if(!loggedIn){
          BottomSignUp = <section className="py-5 bg-image overlay-primary fixed overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h2 className="text-white">Looking For A Research?</h2>
                  <p className="mb-0 text-white lead">Sign up now and find the right research for you.</p>
                </div>
                <div className="col-md-3 ml-auto">
                  <Link to="/register" className="btn btn-warning btn-block btn-lg">Sign Up</Link>
                </div>
              </div>
            </div>
        </section>;
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
                <NavBar loggedIn={loggedIn} isStudent={isStudent} userId={userId} curPage={0}/>

                {/*Home*/}
                <section className="home-section section-hero overlay bg-image" style={{backgroundImage: "url('https://www.chula.ac.th/wp-content/uploads/2018/03/research-impact-hero-768x480.jpg')"}} id="home-section">

                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12">
                          <div className="mb-5 text-center">
                            <h1 className="text-white font-weight-bold">Discover Research Opportunities Here</h1>
                          </div>
                          <form onSubmit={this.onSubmit} className="search-jobs-form">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-lg-8">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                                </div>
                            </div>
                            <div className="row mb-5">
                              <div className="col-sm-3">
                                <select className="form-control" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="Select Type">
                                    <option>Grader/Class Assistant</option>
                                    <option>User Study</option>
                                    <option>Research Assistant</option>
                                </select>
                              </div>
                              <div className="col-sm-3">
                                <select className="form-control" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="Select Your Major">
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

                              <div className="col-sm-3">
                                <select className="form-control" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="Select Salary">
                                  <option> $0~10/hr </option>
                                  <option> $11~15/hr</option>
                                  <option> $15/hr</option>
                                </select>
                              </div>
                              <div className="col-sm-3">
                                <select className="form-control" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="Class Standing">
                                  <option> Freshman </option>
                                  <option> Sophomore</option>
                                  <option> Junior </option>
                                  <option> Senior</option>
                                </select>
                              </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
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
                        <h2 className="section-title mb-2">Latest Research Listed</h2>
                      </div>
                    </div>

                    <ul className="job-listings mb-5">
                        {this.state.postList.map((post, idx) =>
                            <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center" key={idx}>
                              <Link to={{pathname:"/research-detail", state:{loggedIn:loggedIn, userId:userId, isStudent:isStudent, postid: post._id}}}></Link>

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
                    {/*For pagination*/}
                  </div>
                </section>

                {BottomSignUp}

                <Footer></Footer>
        </div>
    );
  }
}

export default Home
