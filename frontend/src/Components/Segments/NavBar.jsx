import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component{

    render(){
        const loggedIn = this.props.loggedIn;
        const curPage = this.props.curPage;
        const isStudent = this.props.isStudent;
        const userId = this.props.userId;

        let userButton;
        if(loggedIn){
            if(isStudent){
                userButton = <Link to="/login">
                <button type="button" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log Out</button>
                </Link>;
            } else {
            userButton = <div>
            <Link to={{pathname:"/create-research", state:{loggedIn:loggedIn, userId:userId}}} className="btn btn-outline-white border-width-2 d-none d-lg-inline-block">
                <span className="mr-2 icon-add"></span>Post a Job</Link>

            <Link to="/login">
            <button type="button" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log Out</button>
            </Link>
        </div>;
        }
        } else {
            userButton = <div className="btn-group" role="group">
                <Link to="/login">
                    <button type="button" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log In</button>
                </Link>
                <Link to="/register">
                    <button type="button" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-person_add"></span>Sign Up</button>
                </Link>
            </div>;
        }

        let menu;
        if(curPage === 0){
            menu = <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                <li className="nav-link"><Link to={{pathname:"/", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}} className="active">Home</Link></li>
                <li className="nav-link"><Link to={{pathname:"/about", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}}>About</Link></li>
                <li className="nav-link"><Link to={{pathname:"/research-listing", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}}>Recent Opportunities</Link></li>
            </ul>;
        } else if(curPage === 1){
            menu = <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                <li className="nav-link"><Link to={{pathname:"/", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}}>Home</Link></li>
                <li className="nav-link"><Link to={{pathname:"/about", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}} className="active">About</Link></li>
                <li className="nav-link"><Link to={{pathname:"/research-listing", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}}>Recent Opportunities</Link></li>
            </ul>;
        } else if (curPage===2){
            menu = <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                <li className="nav-link"><Link to={{pathname:"/", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}}>Home</Link></li>
                <li className="nav-link"><Link to={{pathname:"/about", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}}>About</Link></li>
                <li className="nav-link"><Link to={{pathname:"/research-listing", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}} className="active">Recent Opportunities</Link></li>
            </ul>;
        } else {
            menu = <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                <li className="nav-link"><Link to={{pathname:"/", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}}>Home</Link></li>
                <li className="nav-link"><Link to={{pathname:"/about", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}}>About</Link></li>
                <li className="nav-link"><Link to={{pathname:"/research-listing", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}}>Recent Opportunities</Link></li>
            </ul>;
        }

        return (
            <header className="site-navbar mt-3">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="site-logo col-6"><Link to={{pathname:"/", state:{loggedIn:loggedIn, isStudent:isStudent, userId:userId}}}>RESEARCHBOARD</Link></div>
                        <nav className="mx-auto site-navigation">
                            {menu}
                        </nav>

                        <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                            <div className="ml-auto">
                                    {userButton}
                            </div>
                            <Link to="#" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2"></span></Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default NavBar
