import React, { Component } from 'react';
import Footer from '../Segments/Footer.jsx';
import NavBar from '../Segments/NavBar.jsx';
import ResearchList from '../Segments/ResearchList.jsx';

import axios from 'axios';

class MyProfile extends Component {
    constructor(){
        super();
        this.state={
            postList:[],
            userName: "",
            userEmail: ""
        }
    }


    componentDidMount(){
        if(typeof this.props.location.state !== "undefined"){

            const id = this.props.location.state.userId;
            const postListByUserApi = "http://localhost:4000/api/user/postList/" + id;
            axios.get(postListByUserApi).then(
                    res => {
                        this.setState({postList:res.data.data});
                        }
                    );

            const userDetailApi = "http://localhost:4000/api/user/" + id;
            axios.get(userDetailApi).then(
                    res => {
                        this.setState({userName:res.data.data.name,
                                        userEmail:res.data.data.email});
                        }
                    );
        } else {
            this.props.history.push({
            pathname: '/'
            });
        }


    }



  render() {
      let loggedIn = false, userId, isStudent;
      if(typeof this.props.location.state != "undefined"){
          loggedIn = this.props.location.state.loggedIn;
          userId = this.props.location.state.userId;
          isStudent = this.props.location.state.isStudent;
      }
      const {userName, userEmail} = this.state;

      let postTitle, accountType;;
      if(isStudent){
          postTitle = <h2 className="h3 d-flex align-items-center mb-4 text-primary"><span className="icon-collections_bookmark mr-3"></span>Saved Posts</h2>;
          accountType = <p>Undergraduate Student</p>;
      } else {
          postTitle = <h2 className="h3 d-flex align-items-center mb-4 text-primary"><span className="icon-collections_bookmark mr-3"></span>Published Posts</h2>;
          accountType = <p>Professor</p>;
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
             <NavBar loggedIn={loggedIn} isStudent={isStudent} userId={userId} curPage={-1}/>

            {/*Home*/}
            <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: "url('https://www.chula.ac.th/wp-content/uploads/2018/03/research-impact-hero-768x480.jpg')"}} id="home-section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                        <div className="mb-5 text-center">
                          <h1 className="text-white font-weight-bold"> My Profile</h1>
                        </div>
                    </div>
                  </div>
                </div>
            </section>

            <section className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="mb-5 col-lg-12">
                            <h2 className="h3 d-flex align-items-center mb-4 text-primary"><span className="icon-account_circle mr-3"></span>Account Information</h2>
                            <div className="row justify-content-center">
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <h5>User Name: </h5>
                                    <p>{userName}</p>
                                </div>

                                <div className="col-md-4 mb-3 mb-md-0">
                                    <h5>Email:</h5>
                                    <p>{userEmail}</p>
                                </div>

                                <div className="col-md-4 mb-3 mb-md-0">
                                    <h5>Account Type:</h5>
                                    {accountType}
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-5 col-lg-12">
                            {postTitle}
                            <ResearchList postList={this.state.postList} loggedIn={loggedIn} userId={userId} isStudent={isStudent}></ResearchList>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}
}
export default MyProfile
