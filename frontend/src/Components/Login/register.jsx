import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import serverUrl from '../../config.js'

import Footer from '../Segments/Footer.jsx';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            isStudent: true,
            name: "",
            email: "",
            password: "",
            confirmedPassowrd: "",
            error: false,
            passwordMismatch: false,
            invalidEmail: false,
            emptySpace: false,
        };

        this.onChange = this.onChange.bind(this);
    }

    checkOnChange = () => {
        this.setState({isStudent: false});
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {isStudent, name, email, password, confirmedPassowrd} = this.state;
        const createApi = `http://${serverUrl}:4000/api/user/create`;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (password === '' || name === '' || email === '' || confirmedPassowrd === '') {
            this.setState({
                emptySpace: true,
                error: false,
                passwordMismatch: false,
                invalidEmail: false,
            });
        } else if (password !== confirmedPassowrd) {
            this.setState({
                passwordMismatch: true,
                emptySpace: false,
                error: false,
                invalidEmail: false,
            });
        } else if (!re.test(String(email).toLowerCase())) {
            this.setState({
                invalidEmail: true,
                emptySpace: false,
                error: false,
                passwordMismatch: false
            });
        } else {
            axios.post(createApi, {isStudent, name, email, password})
                .then((res) => {
                    if (res.status === 201) {
                        swal({
                            icon: "success",
                            title: "Successfully Register!"
                        });
                        this.props.history.push({
                            pathname: '/',
                            state: {
                                loggedIn: true,
                                userId: res.data.data._id,
                                isStudent: res.data.data.isStudent
                            }
                        });
                    }
                }).catch((err) => {
                if (err.request) {
                    this.setState({error: true});
                }
            });
        }
    }

    render() {
        let errorMessage;
        if (this.state.passwordMismatch) {
            errorMessage =
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Password doesn't match, please try again.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>;
        }
        if (this.state.error) {
            errorMessage =
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Failed to create account, please try again.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>;

        }
        if (this.state.invalidEmail) {
            errorMessage =
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Invalid email address, please try again.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>;

        }
        if (this.state.emptySpace) {
            errorMessage =
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Please fill in all the blanks.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>;

        }

        const {name, email, password, confirmedPassowrd} = this.state;
        return (
            <div className="site-wrap">

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
                <section className="section-hero overlay inner-page bg-image"
                         style={{backgroundImage: "url('https://www.chula.ac.th/wp-content/uploads/2018/03/research-impact-hero-768x480.jpg')"}}
                         id="home-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-5 text-center">
                                    <h1 className="text-white font-weight-bold">Welcome To ResearchBoard!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="mb-4">Sign Up To ResearchBoard</h2>
                                <form onSubmit={this.onSubmit} className="p-4 border rounded">
                                    {errorMessage}
                                    <div className="row form-group justify-content-center">
                                        <div className="col-md-8 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="fname">Name</label>
                                            <input type="text" id="fname" className="form-control" name="name"
                                                   value={name} onChange={this.onChange} placeholder="Your Name"/>
                                        </div>
                                    </div>

                                    <div className="row form-group justify-content-center">
                                        <div className="col-md-8 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="email">Email</label>
                                            <input type="text" id="email" className="form-control" name="email"
                                                   value={email} onChange={this.onChange} placeholder="Your Email"/>
                                        </div>
                                    </div>

                                    <div className="row form-group justify-content-center">
                                        <div className="col-md-8 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="password">Password</label>
                                            <input type="password" id="password" className="form-control"
                                                   name="password" value={password} onChange={this.onChange}
                                                   placeholder="Password"/>
                                        </div>
                                    </div>

                                    <div className="row form-group justify-content-center">
                                        <div className="col-md-8 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="confirmedPassowrd">Re-Type
                                                Password</label>
                                            <input type="password" id="confirmedPassowrd" className="form-control"
                                                   name="confirmedPassowrd" value={confirmedPassowrd}
                                                   onChange={this.onChange} placeholder="Re-type Password"/>
                                        </div>
                                    </div>

                                    <div className="row form-group justify-content-center">
                                        <div className="col-md-8 mb-3 mb-md-0">
                                            <div className="form-check form-check-inline">
                                                <label className="text-black" htmlFor="type">Account Type</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="typeRadios"
                                                       id="undergrad" defaultChecked/>
                                                <label className="form-check-label" htmlFor="undergrad">Undergrad
                                                    Student</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="typeRadios"
                                                       id="professor" onChange={this.checkOnChange}/>
                                                <label className="form-check-label"
                                                       htmlFor="professor">Professor</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row form-group justify-content-center">
                                        <div className="col-md-6">
                                            <input type="submit" value="CREATE AN ACCOUNT"
                                                   className="btn px-4 btn-primary btn-block text-white"/>
                                        </div>
                                    </div>

                                    <div className="dropdown-divider"></div>

                                    <div className="row form-group justify-content-center">
                                        <Link to="/login">Sign in with existing account</Link>
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

export default Register
