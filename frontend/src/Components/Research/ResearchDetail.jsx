import React, { Component } from 'react';
import Footer from '../Segments/Footer.jsx';
import NavBar from '../Segments/NavBar.jsx';
import axios from 'axios';
import swal from 'sweetalert';
import serverUrl from '../../config.js'


class ResearchDetail extends Component {
  constructor(props){
      super();
      this.state = {
          retval : "",
          loggedIn: false,
          userId: "",
          isStudent: false,
          userPostList: [],
          hasPost: false
      };
  }


  componentDidMount(){
      if(typeof this.props.location.state !== "undefined"){
          const url = `http://${serverUrl}:4000/api/posts/` + this.props.location.state.postid;

          axios.get(url).then(
              res => {
                  this.setState({retval: res.data.data});
              }
          );

          const boolVal = this.props.location.state.userPostList.includes(this.props.location.state.postid);
          this.setState({loggedIn: this.props.location.state.loggedIn,
                        userId: this.props.location.state.userId,
                        isStudent: this.props.location.state.isStudent,
                        userPostList: this.props.location.state.userPostList,
                        hasPost: boolVal
                    });


      } else {
          this.props.history.push({
          pathname: '/'
          });
    }
  }
  termSelect(data){

    if(data === undefined)
      return "";
    if(data === 0){
      return "Spring";
  }else if(data === 1){
      return "Summer";
    }else return "Fall";

  }
  salarySelect(data){
    if(data === undefined)
      return "";
    if(data === 0){
      return "0~10 /hr";
  }else if(data === 1){
      return "11~15 /hr";
    }else return "15+ /hr";

  }

  typeSelect(data){
    if(data === undefined)
      return "";
    if(data === 0){
      return "Grader/Class Assistant";
  }else if(data === 1){
      return "User study";
    }else return "Research Assistant";
  }

  majorSelect(data){
    if(data === undefined)
      return "";
    var toret = ""
    for(var i = 0; i < data.length; i++){
      if(data[i] === 0){
        toret = toret + "Aerospace Engineering";
    }else if(data[i] === 1){
        toret = toret +  "Agricultural and Biological engineering";
    }else if(data[i] === 2){
        toret = toret +  "Bioengineering";
    }else if(data[i] === 3){
        toret = toret + "Chemical & Biomolecular engineering"
    }else if(data[i] === 4){
        toret = toret +  "Civil and environmental engineering";
    }else if(data[i] === 5){
        toret = toret +  "Computer engineering";
    }else if(data[i] === 6){
        toret = toret + "Computer Science"
    }else if(data[i] === 7){
        toret = toret +  "Electrical Engineering";
    }else if(data[i] === 8){
        toret = toret + "Engineering Mechanics"
    }else if(data[i] === 9){
        toret = toret +  " Engineering Physics";
    }else if(data[i] === 10){
        toret = toret +  "Industrial Engineering";
    }else if(data[i] === 11){
        toret = toret + "Materials Science and Engineering"
    }else if(data[i] === 12){
        toret = toret +  "Mechanical Engineering";
    }else if(data[i] === 13){
        toret = toret +  "Nuclear, Plasma, and Radiological Engineering(NPRE)";
    }else if(data[i] === 14){
        toret = toret + "Systems Engineering and design"
      }

      if(i !== data.length - 1){
        toret = toret + " / "
      }
    }
    return toret

  }

  standingSelect(data){

    if(data === undefined)
      return "";
    var toret = ""
    for(var i = 0; i < data.length; i++){
      if(data[i] === 0){
        toret = toret + "Freshman";
    }else if(data[i] === 1){
        toret = toret +  "Sophomore";
    }else if(data[i] === 2){
        toret = toret +  "Junior";
      }else toret = toret + "Senior"

      if(i !== data.length - 1){
        toret = toret + " / "
      }
    }
    return toret

  }

  // For the back button
  goBack = () => {
      if(typeof this.props.history != "undefined"){
          this.props.history.goBack();
      }
  }

  //For the save button
  savePost = () => {
      const userId = this.state.userId, postId = this.state.retval._id;
      const hasPost = this.state.hasPost;
      const favoriteUrl = `http://${serverUrl}:4000/api/user/favoriteUpdate`;
      axios.put(favoriteUrl, {userId, postId}).then(
          res => {
              this.setState({hasPost: !hasPost});
          }
      );

  }

  //for the delete button
  deletePost = () => {
      const deleteUrl = `http://${serverUrl}:4000/api/posts/delete/`+this.state.retval._id;
      axios.delete(deleteUrl).then(
          res => {
              this.setState({hasPost: false});
              swal({
                  icon: "success",
                  title: "Success!"
              });
              this.goBack();
          }
      )
  }

    render(){
        const {loggedIn, userId, isStudent, hasPost} = this.state;

        let saveButton;
        if(loggedIn){
            if(isStudent){
                if(hasPost){
                    saveButton =
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-block btn-light btn-md" onClick={this.savePost}><span className="icon-heart mr-2 text-danger"></span>Unfavorite</button>
                            </div>
                        </div>
                    </div>;

                } else {
                saveButton =
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-block btn-light btn-md" onClick={this.savePost}><span className="icon-heart-o mr-2 text-danger"></span>Favorite</button>
                        </div>
                    </div>
                </div>;
            }
            } else {
                if(hasPost){
                saveButton =
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-block btn-danger btn-md" onClick={this.deletePost}><span className="icon-delete mr-2 text-light"></span>Delete</button>
                        </div>
                    </div>
                </div>;
                }
            }
        }

        return (

            <div className="site-wrap">

                    <NavBar loggedIn={loggedIn} isStudent={isStudent} userId={userId} curPage={-1}/>

                    <section className="section-hero overlay inner-page bg-image" style={{backgroundImage: "url('https://www.chula.ac.th/wp-content/uploads/2018/03/research-impact-hero-768x480.jpg')"}} id="home-section">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12 text-center">
                            <h1 className="text-white font-weight-bold">Detail</h1>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="site-section">
                      <div className="container">
                         <div className="row mb-5">
                             <div className="col-lg-2 mb-4 mb-lg-0">
                                 <button className="btn btn-block btn-primary btn-md" onClick={this.goBack}><span className="icon-keyboard_arrow_left mr-2"></span>Back</button>                             </div>
                         </div>
                        <div className="row align-items-center mb-5">
                          <div className="col-lg-8 mb-4 mb-lg-0">
                            <div className="d-flex align-items-center">
                              <div>
                                <h2>{this.state.retval.jobName}</h2>
                                <div>
                                  <span className="m-2"><span className="icon-briefcase mr-2"></span><span>{this.typeSelect(this.state.retval.type)}</span></span>
                                  <span className="ml-0 mr-2 mb-2"><span className="icon-money mr-2"></span>{this.salarySelect(this.state.retval.salary)}</span>
                                  <span className="m-2"><span className="icon-room mr-2"></span>Champaign</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {saveButton}
                        </div>
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="mb-5">
                              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-align-left mr-3"></span>Description</h3>
                              <p>{this.state.retval.description}</p>
                            </div>
                            <div className="mb-5">
                              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-rocket mr-3"></span>Requirement</h3>
                              <ul className="list-unstyled m-0 p-0">
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Major: {this.majorSelect(this.state.retval.major)}</span></li>
                                <li className="d-flex align-items-start mb-2"><span className="icon-check_circle mr-2 text-muted"></span><span>Standing: {this.standingSelect(this.state.retval.standing)}</span></li>

                              </ul>
                            </div>

                            <div className="mb-5">
                              <h3 className="h5 d-flex align-items-center mb-4 text-primary"><span className="icon-turned_in mr-3"></span>Contact Info</h3>
                              <ul className="list-unstyled m-0 p-0">
                                <li className="d-flex align-items-start mb-2"><span className="icon-contacts mr-2 text-muted"></span><span>Contact Name: {this.state.retval.contactName}</span></li>
                                <li className="d-flex align-items-start mb-2"><span className="icon-mail_outline mr-2 text-muted"></span><span>Conatct Email: {this.state.retval.contactEmail}</span></li>
                              </ul>
                            </div>

                          </div>
                          <div className="col-lg-4">
                            <div className="bg-light p-3 border rounded mb-4">
                              <h3 className="text-primary  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
                              <ul className="list-unstyled pl-3 mb-0">
                                <li className="mb-2"><strong className="text-black">Term:</strong> {this.termSelect(this.state.retval.term)}</li>
                                <li className="mb-2"><strong className="text-black">Salary:</strong> {this.salarySelect(this.state.retval.salary)}</li>
                                <li className="mb-2"><strong className="text-black">Type:</strong> {this.typeSelect(this.state.retval.type)}</li>
                                <li className="mb-2"><strong className="text-black">Published on:</strong> {new Date(this.state.retval.dateCreated).toDateString()}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="bg-light pt-5 testimony-full">
                        <div className="owl-carousel single-carousel">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-6 align-self-center text-center text-lg-left">
                                <blockquote>
                                  <p>&ldquo;Research is to see what everybody else has seen, and to think what nobody else has thought.&rdquo;</p>
                                  <p><cite> &mdash; Albert Szent-Gyorgyi</cite></p>
                                </blockquote>
                              </div>
                            </div>
                          </div>

                          <div className="container">
                            <div className="row">
                              <div className="col-lg-6 align-self-center text-center text-lg-left">
                                <blockquote>
                                  <p>&ldquo;It always seems impossible until it's done.&rdquo;</p>
                                  <p><cite> &mdash; Nelson Mandela</cite></p>
                                </blockquote>
                              </div>
                            </div>
                          </div>

                          <div className="container">
                            <div className="row">
                              <div className="col-lg-6 align-self-center text-center text-lg-left">
                                <blockquote>
                                  <p>&ldquo;Do not be afraid to ask for help. Nobody gets through college on their own.&rdquo;</p>
                                  <p><cite> &mdash; Michelle Obama</cite></p>
                                </blockquote>
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

export default ResearchDetail
