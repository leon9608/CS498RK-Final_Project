import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Footer from '../Segments/Footer.jsx';
import serverUrl from '../../config.js'


class Login extends Component {
    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
            error: false
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { email, password} = this.state;
        const signApi = `http://${serverUrl}:4000/api/user/signIn`;
        axios.post(signApi, {email, password})
            .then((res) => {
                if(res.status === 200){
                    swal({
                        icon: "success",
                        title: "Welcome Back!"
                    });
                    this.props.history.push({
                        pathname: '/',
                        state: {loggedIn: true,
                                userId:res.data.data._id,
                                isStudent:res.data.data.isStudent}
                    });
                }
            }).catch((err) => {
                if(err.request){
                    this.setState({error:true});
                }
            });
    }


  render() {
      const {email, password} = this.state;

      let errorMessage;
      if(this.state.error){
          errorMessage =
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
                Failed to log in, please try again.
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
          </div>;

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
                <header className="site-navbar mt-3">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="site-logo col-6"><Link to="/">RESEARCHBOARD</Link></div>
                            <nav className="mx-auto site-navigation">
                                <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                    <li className="nav-link"><Link to="/">Home</Link></li>
                                    <li className="nav-link"><Link to="/about">About</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* title section */}
                <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: "url('https://www.chula.ac.th/wp-content/uploads/2018/03/research-impact-hero-768x480.jpg')"}} id="home-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                          <div className="mb-5 text-center">
                            <h1 className="text-white font-weight-bold">Welcome Back!</h1>
                          </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="site-section">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <h2 className="mb-4">Log In To ResearchBoard</h2>
                        <form onSubmit={this.onSubmit} className="p-4 border rounded">

                            {errorMessage}
                          <div className="row form-group justify-content-center">
                            <div className="col-md-6 mb-3 mb-md-0">
                              <label className="text-black" htmlFor="email">Email</label>
                              <input type="text" id="email" className="form-control" placeholder="Your Email" name="email" value={email} onChange={this.onChange}/>
                            </div>
                          </div>
                          <div className="row form-group justify-content-center">
                            <div className="col-md-6 mb-3 mb-md-0">
                              <label className="text-black" htmlFor="password">Password</label>
                              <input type="password" id="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange}/>
                            </div>
                          </div>

                          <div className="row form-group justify-content-center">
                            <div className="col-md-6">
                              <input type="submit" value="LOG IN" className="btn px-4 btn-primary btn-block text-white" />
                            </div>
                          </div>

                          <div className="row form-group justify-content-center">
                              <Link to="/register">Create a new account</Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>

                <Footer></Footer>

            </div>
    );
  }
}

export default Login
