import React, { Component } from 'react';
import Footer from '../Segments/Footer.jsx';
import NavBar from '../Segments/NavBar.jsx';
import ResearchList from '../Segments/ResearchList.jsx';

class SearchResultListing extends Component {
    state = {
        postList : this.props.location.state.postList
    };

    render(){
        let loggedIn = false, userId, isStudent;
        if(typeof this.props.location.state != "undefined"){
            loggedIn = this.props.location.state.loggedIn;
            userId = this.props.location.state.userId;
            isStudent = this.props.location.state.isStudent;
        }

        return(
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
                    <div className="col-md-12">
                        <div className="mb-5 text-center">
                          <h1 className="text-white font-weight-bold">Search Results</h1>
                        </div>
                    </div>
                  </div>
                </div>
            </section>


            <section className="site-section" id="next">
              <div className="container">

                  <ResearchList postList={this.state.postList} loggedIn={loggedIn} userId={userId} isStudent={isStudent}/>

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

export default SearchResultListing
