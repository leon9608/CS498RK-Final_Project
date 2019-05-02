import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class ResearchList extends Component{
    state = {
        userPostList : []
    }
    componentDidMount(){
        if(typeof this.props.userId !== "undefined" && this.props.userId !== ""){
            const id = this.props.userId;
            const postListByUserApi = "http://localhost:4000/api/user/postList/" + id;
            const params = {
                select: {"_id":"1"},
            }
            axios.get(postListByUserApi, {params}).then(
                res => {
                    let list = [];
                    for(var i=0; i < res.data.data.length; i++){
                        list.push(res.data.data[i]._id);
                    }
                    this.setState({userPostList:list});
                    }
                );
        }
    }

    trimDescrp = (str) => {
        const maxLength = 160;
        if(maxLength < str.length){
            return str.substring(0, maxLength) + "...";
        } else {
            return str;
        }
    }
    render(){
        const {postList, loggedIn, userId, isStudent} = this.props;
        return (
            <ul className="job-listings mb-5">
                {postList.map((post,idx) =>
                    <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center" key={idx}>
                        <Link to={{pathname:"/research-detail", state:{loggedIn:loggedIn, userId:userId, isStudent:isStudent, postid: post._id, userPostList:this.state.userPostList}}}></Link>

                      <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                        <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                          <h2>{post.jobName}</h2>
                          <strong>{this.trimDescrp(post.description)}</strong>
                        </div>
                        <div className="job-listing-location mb-3 mb-sm-0 custom-width w-25">
                            <span className="icon-contact_mail"></span>{post.contactName}
                        </div>
                        <div className="job-listing-meta">
                            <span className="icon-date_range"></span>{post.dateCreated}
                        </div>
                      </div>
                    </li>
                )}
            </ul>
        );
    }
}
export default ResearchList
