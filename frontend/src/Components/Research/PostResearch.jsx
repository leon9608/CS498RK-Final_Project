import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Segments/Footer.jsx';

class PostResearch extends Component {
    constructor(){
        super();
        this.state = {
            userId: "5cc7ab68c24f625210928e3a",
            jobName: "",
            description: "",
            type:0,
            salary: 0,
            major: [],
            standing: [],
            term: 0,
            contactEmail: "",
            contactName: ""
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        if(e.target.name === "type" || e.target.name === "salary" || e.target.name === "term"){
            this.setState({[e.target.name]: parseInt(e.target.value)});
        } else {
        this.setState({[e.target.name]: e.target.value});
        }
    }

    onMultiSelectChange = (e) => {
        var options = e.target.options;
        var value = [];
        for(var i = 0; i < options.length; i++){
            if(options[i].selected){
                value.push(parseInt(options[i].value));
            }
        }
        this.setState({[e.target.name]:value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {userId, jobName, description, type, salary, major, standing, term, contactName, contactEmail} = this.state;
        const postAddApi = 'http://localhost:4000/api/posts/add';
        axios.post(postAddApi, {userId, jobName, description, type, salary, major, standing, term, contactName, contactEmail})
        .then((res)=>{
            if(res.status === 201){
                this.props.history.push("/research-detail");
            }
        });
    }

    render(){
        const { jobName, description, type, salary, standing, term, contactEmail, contactName } = this.state;
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


                <header className="site-navbar mt-3">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="site-logo col-6"><Link to="/">RESEARCHBOARD</Link></div>
                            <nav className="mx-auto site-navigation">
                                <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                                    <li className="nav-link"><Link to="/">Home</Link></li>
                                    <li className="nav-link"><Link to="/about">About</Link></li>
                                    <li className="nav-link"><Link to="/research-listing">Recent Opportunities</Link></li>
                                </ul>
                            </nav>

                            <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                                <div className="ml-auto">
                                    <div className="btn-group" role="group">
                                        <Link to="/login">
                                            <button type="button" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log In</button>
                                        </Link>
                                        <Link to="/register">
                                            <button type="button" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-person_add"></span>Sign Up</button>
                                        </Link>
                                    </div>
                                </div>
                                <Link to="#" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2"></span></Link>
                            </div>
                        </div>
                    </div>
                </header>


                <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: "url('https://www.chula.ac.th/wp-content/uploads/2018/03/research-impact-hero-768x480.jpg')"}} id="home-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <h1 className="text-white font-weight-bold">Post A New Research</h1>
                      </div>
                    </div>
                  </div>
                </section>


                <section className="site-section">
                  <div className="container">

                    <div className="row mb-5">
                      <div className="col-lg-12">
                        <form onSubmit={this.onSubmit} className="p-4 p-md-5 border rounded" method="post">
                          <h3 className="text-black mb-5 border-bottom pb-2">Job Details</h3>
                              <div className="form-group">
                                <label htmlFor="jobName">Job Title</label>
                                <input type="text" className="form-control" id="jobName" name="jobName" value={jobName} onChange={this.onChange}/>
                              </div>

                              <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" id="description" name="description" value={description} onChange={this.onChange}/>
                              </div>

                              <div className="form-group">
                                  <label htmlFor="type">Type</label>
                                  <select className="form-control" id="type" name="type" value={type} onChange={this.onChange}>
                                      <option value="0">Grader/Class Assistant</option>
                                      <option value="1">User Study</option>
                                      <option value="2">Research Assistant</option>
                                  </select>
                              </div>

                          <label htmlFor="major">Major</label>
                          <div className="form-group">
                            <select className="custom-select" size="15" multiple id="major" name="major" onChange={this.onMultiSelectChange}>
                                <option value="0">Aerospace Engineering</option>
                                <option value="1">Agricultural and Biological engineering</option>
                                <option value="2">Bioengineering</option>
                                <option value="3">Chemical & Biomolecular engineering</option>
                                <option value="4">Civil and environmental engineering</option>
                                <option value="5">Computer engineering</option>
                                <option value="6">Computer Science</option>
                                <option value="7">Electrical Engineering</option>
                                <option value="8">Engineering Mechanics</option>
                                <option value="9">Engineering Physics</option>
                                <option value="10">Industrial Engineering</option>
                                <option value="11">Materials Science and Engineering</option>
                                <option value="12">Mechanical Engineering</option>
                                <option value="13">Nuclear, Plasma, and Radiological Engineering</option>
                                <option value="14">Systems Engineering and design</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="salary">Salary</label>
                            <select className="form-control" id="salary" name="salary" value={salary} onChange={this.onChange}>
                                <option value="0">$0~10/hr</option>
                                <option value="1">$11~15/hr</option>
                                <option value="2">$15+/hr</option>
                            </select>
                        </div>


                            <label htmlFor="standing">Standing</label>
                            <div className="form-group">
                              <select className="custom-select" size="4" multiple id="standing" name="standing" value={standing} onChange={this.onMultiSelectChange}>
                                  <option value="0">Freshman</option>
                                  <option value="1">Sophomore</option>
                                  <option value="2">Junior</option>
                                  <option value="3">Senior</option>
                              </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="term">Term</label>
                                <select className="form-control" id="term" name="term" value={term} onChange={this.onChange}>
                                    <option value="0">Spring</option>
                                    <option value="1">Summer</option>
                                    <option value="2">Fall</option>
                                    <option value="2">Winter</option>
                                </select>
                            </div>


                          <div className="form-group">
                            <label htmlFor="contactName">Contact Name</label>
                            <input type="text" className="form-control" id="contactName" name="contactName" value={contactName} onChange={this.onChange}/>
                          </div>

                          <div className="form-group">
                            <label htmlFor="contactEmail">Contact Email</label>
                            <input type="text" className="form-control" id="contactEmail" name="contactEmail" value={contactEmail} onChange={this.onChange}/>
                          </div>

                          <div className="row align-items-center">
                                <div className="col-12">
                                  <input type="submit" value="Save Job" className="btn btn-block btn-primary btn-md"/>
                                </div>
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

export default PostResearch
