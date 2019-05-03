import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Footer from '../Segments/Footer.jsx';
import NavBar from '../Segments/NavBar.jsx';
import ResearchList from '../Segments/ResearchList.jsx';
import serverUrl from '../../config.js'

class Home extends Component {
    constructor(){
        super();
        this.state = {
            postList : [],
            loggedIn: false,
            userId: "",
            isStudent: true,
            searchText: "",
            type:-1,
            major: -1,
            salary: -1,
            standing: -1
        };
        this.onChange = this.onChange.bind(this);
    }

  componentDidMount(){
      const postListApi = `http://${serverUrl}:4000/api/posts`;
      axios.get(postListApi).then(
          res => {
              this.setState({postList: res.data.data});
          }
      );


      if(typeof this.props.location.state != "undefined"){
            this.setState({loggedIn: this.props.location.state.loggedIn,
                userId: this.props.location.state.userId,
                isStudent: this.props.location.state.isStudent});
    }
  }

  onChange = (e) => {
      if(e.target.name !== "searchText"){
          this.setState({[e.target.name]: parseInt(e.target.value)});
      } else {
      this.setState({[e.target.name]: e.target.value});
      }
  }

  //For search
  onSubmit = (e) => {
      e.preventDefault();

      const {loggedIn, userId, isStudent, searchText, type, major, salary, standing } = this.state;
      const getPostApi = `http://${serverUrl}:4000/api/posts`;

      let whereClause = `{`, hasWhere = false;
      if(searchText !== ""){
          hasWhere = true;
          whereClause += `"jobName":{"$regex":"` + searchText + `", "$options":"i"}`;
      }

      // Type
      if(type !== -1){
          if(hasWhere){
            whereClause += `,"type":`+type;
          } else {
            hasWhere =true;
            whereClause += `"type":`+type;
            }
        }

     // Major
      if(major !== -1){
          if(hasWhere){
             whereClause += `,"major":`+major;
         } else {
             hasWhere = true;
             whereClause += `"major":`+major;
         }
      }

      // Salary
      if(standing !== -1){
          if(hasWhere){
             whereClause += `,"standing":`+standing;
         } else {
             hasWhere = true;
             whereClause += `"standing":`+standing;
         }
      }

      // Standing
      if(salary !== -1){
          if(hasWhere){
             whereClause += `,"salary":`+salary;
         } else {
             hasWhere = true;
             whereClause += `"salary":`+salary;
         }
      }
      whereClause += `}`;

      const params = {
          where: whereClause,
      }
      axios.get(getPostApi, {params})
      .then((res) => {
          if(res.status === 200){
              this.props.history.push({
                  pathname: '/search-result',
                  state: {loggedIn: loggedIn,
                          userId:userId,
                          isStudent:isStudent,
                          postList:res.data.data
                      }
              });
          }
      });

  }

  render() {
      let loggedIn = false, userId, isStudent;
      if(typeof this.props.location.state != "undefined"){
          loggedIn = this.props.location.state.loggedIn;
          userId = this.props.location.state.userId;
          isStudent = this.props.location.state.isStudent;
      }

      const {searchText} = this.state;

      let BottomSignUp;
      if(!loggedIn){
          BottomSignUp = <section className="py-5 bg-image overlay-primary fixed overlay">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h2 className="text-white">Looking For A Research?</h2>
                  <p className="mb-0 text-white lead">Sign up now and find the right research for you.</p>
                </div>
                <div className="col-md-3 ml-auto">
                  <Link to="/register" className="btn btn-warning btn-block btn-lg">Sign Up</Link>
                </div>
              </div>
            </div>
        </section>;
      }

    return (
        <div className="site-wrap">


                {/* NAVBAR */}
                <NavBar loggedIn={loggedIn} isStudent={isStudent} userId={userId} curPage={0}/>

                {/*Home*/}
                <section className="home-section section-hero overlay bg-image" style={{backgroundImage: "url('https://www.chula.ac.th/wp-content/uploads/2018/03/research-impact-hero-768x480.jpg')"}} id="home-section">

                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12">
                          <div className="mb-5 text-center">
                            <h1 className="text-white font-weight-bold">Discover Research Opportunities Here</h1>
                          </div>
                          <form onSubmit={this.onSubmit} className="search-jobs-form">
                            <div className="row mb-5 justify-content-center">
                                <div className="col-lg-8">
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search" id="searchText" name="searchText" value={searchText} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="row mb-5">
                              <div className="col-sm-3">
                                <select className="custom-select" defaultValue="-1" id="type" name="type" onChange={this.onChange}>
                                    <option value="-1">Type</option>
                                    <option value="0">Grader/Class Assistant</option>
                                    <option value="1">User Study</option>
                                    <option value="2">Research Assistant</option>
                                </select>
                              </div>
                              <div className="col-sm-3">
                                <select className="form-control" id="major" name="major" defaultValue="-1" onChange={this.onChange}>
                                  <option value="-1">Major</option>
                                  <option value="0">Aerospace Engineering</option>
                                  <option value="1">Agricultural and Biological engineering</option>
                                  <option value="2">Bioengineering</option>
                                  <option value="3">Chemical & Biomolecular engineering</option>
                                  <option value="4">Civil and environmental engineering</option>
                                  <option value="5">Computer engineering</option>
                                  <option value="6">Computer Science</option>
                                  <option value="7">Electrical engineering</option>
                                  <option value="8">Engineering mechanics</option>
                                  <option value="9">Engineering Physics</option>
                                  <option value="10">Industrial Engineering</option>
                                  <option value="11">Materials Science and Engineering</option>
                                  <option value="12">Mechanical Engineering</option>
                                  <option value="13">Nuclear, Plasma, and Radiological Engineering</option>
                                  <option value="14">Systems Engineering and Design</option>
                                </select>
                              </div>

                              <div className="col-sm-3">
                                <select className="form-control" id="salary" name="salary" defaultValue="-1" onChange={this.onChange}>
                                  <option value="-1"> Salary </option>
                                  <option value="0"> $0~10/hr </option>
                                  <option value="1"> $11~15/hr</option>
                                  <option value="2"> $15/hr</option>
                                </select>
                              </div>
                              <div className="col-sm-3">
                                <select className="form-control" id="standing" name="standing" defaultValue="-1" onChange={this.onChange}>
                                  <option value="-1">Class Standing</option>
                                  <option value="0"> Freshman </option>
                                  <option value="1"> Sophomore</option>
                                  <option value="2"> Junior </option>
                                  <option value="3"> Senior</option>
                                </select>
                              </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                  <button type="submit" className="btn btn-primary btn-lg btn-block text-white btn-search"><span className="icon-search icon mr-2"></span>Search Job</button>
                                </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                </section>

                <section className="site-section" id="next">
                  <div className="container">

                    <div className="row mb-5 justify-content-center">
                      <div className="col-md-7 text-center">
                        <h2 className="section-title mb-2">Latest Research Listed</h2>
                      </div>
                    </div>

                    <ResearchList postList={this.state.postList} loggedIn={loggedIn} userId={userId} isStudent={isStudent}/>


                    {/*For pagination*/}
                  </div>
                </section>

                {BottomSignUp}

                <Footer></Footer>
        </div>
    );
  }
}

export default Home
