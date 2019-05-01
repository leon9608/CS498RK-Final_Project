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

                {/*For pagination*/}

              </div>
            </section>

            <Footer></Footer>
            </div>

        );
    }
}

export default SearchResultListing
