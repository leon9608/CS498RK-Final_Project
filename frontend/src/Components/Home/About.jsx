import React, { Component } from 'react';
import Footer from '../Segments/Footer.jsx';
import NavBar from '../Segments/NavBar.jsx';
import axios from 'axios';
import serverUrl from '../../config.js'

class About extends Component {
    constructor(){
        super();
        this.state = {
            postCount:0
        }
    }

    componentDidMount(){
        const postListApi = `http://${serverUrl}:4000/api/posts`;
        axios.get(postListApi).then(
            res => {
                this.setState({postCount: res.data.data.length});
            }
        )
    }
  render() {
      const {postCount} = this.state;
      let loggedIn = false, userId, isStudent;
      if(typeof this.props.location.state != "undefined"){
          loggedIn = this.props.location.state.loggedIn;
          userId = this.props.location.state.userId;
          isStudent = this.props.location.state.isStudent;
      }

      return (
          <div className="site-wrap">

              <NavBar loggedIn={loggedIn} isStudent={isStudent} userId={userId} curPage={1}/>

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
                        <strong className="number" data-number={postCount}>{postCount}</strong>
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
                          <img src="http://illinoismarathon.com/wp-content/uploads/alma-mater-600x338.jpg" alt="alma mater" className="img-fluid img-shadow"/>
                    </div>
                    <div className="col-lg-5 ml-auto">
                      <h2 className="section-title mb-3">ResearchBoard For Undergraduate Students</h2>
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
                        <img src="https://static1.squarespace.com/static/548b59b0e4b0c84e07f40b9d/548b6469e4b0ff83264132a3/56319d1ee4b05cc183adab82/1531275934314/DSC_0008_C.jpg?format=750w" alt="ECEB" className="img-fluid img-shadow"/>
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
                        <p>Overall developer incharge. Impplemented major website design and functionalities.</p>
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
                    <p></p>
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
