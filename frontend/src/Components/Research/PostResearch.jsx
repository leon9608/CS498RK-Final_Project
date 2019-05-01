import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Segments/Footer.jsx';
import NavBar from '../Segments/NavBar.jsx';


class PostResearch extends Component {
    constructor(){
        super();
        this.state = {
            userId: "",
            jobName: "",
            description: "",
            type:0,
            salary: 0,
            major: [],
            standing: [],
            term: 0,
            contactEmail: "",
            contactName: "",
            error: false
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

    componentDidMount(){
        if(typeof this.props.location.state != "undefined"){
            this.setState({userId:this.props.location.state.userId});
        }
    }

    onSubmit = (e) => {
        e.preventDefault();


        const {userId, jobName, description, type, salary, major, standing, term, contactName, contactEmail} = this.state;
        const postAddApi = 'http://localhost:4000/api/posts/add';

        axios.post(postAddApi, {userId, jobName, description, type, salary, major, standing, term, contactName, contactEmail})
        .then((res)=>{
            if(res.status === 201){
                this.props.history.push({
                    pathname: "/research-detail",
                    state: {loggedIn: true}
                });
            }
        }).catch((err) => {
            if(err.request){
                this.setState({error:true});
            }
        });
    }

    render(){
        let loggedIn = false, isStudent;
        if(typeof this.props.location.state != "undefined"){
            loggedIn = this.props.location.state.loggedIn;
            isStudent = this.props.location.state.isStudent;
        }
        let errorMessage;
        if(this.state.error){
            errorMessage =
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  Failed to create new post, please try again.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>;

        }
        const { userId, jobName, description, type, salary, standing, term, contactEmail, contactName } = this.state;
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
                        <h1 className="text-white font-weight-bold">Post A New Research</h1>
                      </div>
                    </div>
                  </div>
                </section>


                <section className="site-section">
                  <div className="container">

                    <div className="row mb-5">
                      <div className="col-lg-12">
                          {errorMessage}
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
