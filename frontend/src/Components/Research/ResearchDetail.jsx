import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Segments/Footer.jsx';
import NavBar from '../Segments/NavBar.jsx';
import axios from 'axios';


class ResearchDetail extends Component {
  constructor(props){
      super();
      this.state = {
          retval : ""
      };
  }

  componentDidMount(){
      const url = 'http://localhost:4000/api/posts/' + this.props.location.state.postid;

      axios.get(url).then(
          res => {
              console.log(res.data.data)
              this.setState({retval: res.data.data});
          }
      )
  }

    render(){
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

                    <NavBar loggedIn={loggedIn} isStudent={isStudent} userId={userId} curPage={-1}/>

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
                             <Link to={{pathname:"/research-listing", state:{loggedIn:loggedIn, userId:userId, isStudent:isStudent}}} className="btn btn-block btn-primary btn-md"><span className="icon-keyboard_arrow_left mr-2"></span>Back</Link>
                             </div>
                         </div>
                        <div className="row align-items-center mb-5">
                          <div className="col-lg-8 mb-4 mb-lg-0">
                            <div className="d-flex align-items-center">
                              <div>
                                <h2>{this.state.retval.jobName}</h2>
                                <div>
                                  <span className="ml-0 mr-2 mb-2"><span className="icon-briefcase mr-2"></span>Puma</span>
                                  <span className="m-2"><span className="icon-room mr-2"></span>New York City</span>
                                  <span className="m-2"><span className="icon-clock-o mr-2"></span><span className="text-primary">Full Time</span></span>
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
                              <p>{this.state.retval.description}</p>
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
                              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-turned_in mr-3"></span>Contact Info</h3>
                              <ul className="list-unstyled m-0 p-0">
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Contact Name: {this.state.retval.contactName}</span></li>                         
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Conatct Email: {this.state.retval.contactEmail}</span></li>
                              </ul>
                            </div>

                          </div>
                          <div className="col-lg-4">
                            <div className="bg-light p-3 border rounded mb-4">
                              <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
                              <ul className="list-unstyled pl-3 mb-0">
                                <li className="mb-2"><strong className="text-black">Major:</strong> {this.state.retval.major}</li>                               
                                <li className="mb-2"><strong className="text-black">Term:</strong> {this.state.retval.term}</li>                                
                                <li className="mb-2"><strong className="text-black">Salary:</strong> {this.state.retval.salary}</li>
                                <li className="mb-2"><strong className="text-black">Type:</strong> {this.state.retval.type}</li>                               
                                <li className="mb-2"><strong className="text-black">Employment Status:</strong> Part-time</li>
                                <li className="mb-2"><strong className="text-black">Published on:</strong> {this.state.retval.dateCreated}</li>                              
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
