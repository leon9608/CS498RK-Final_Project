import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '../Segments/Pagination.jsx';
import serverUrl from '../../config.js'
import researchImg from './img/research.png';
import taImg from './img/ta.png';
import userStudyImg from './img/userStudy.png';


class ResearchList extends Component{

    constructor(props){

        super(props)
        this.state = {
            userPostList : [],
            pageOfItems: []
        }

        this.onChangePage = this.onChangePage.bind(this);

    }

    onChangePage(pageOfItems) {

        this.setState({ pageOfItems: pageOfItems });

    }


    componentDidMount(){
        if(typeof this.props.userId !== "undefined" && this.props.userId !== ""){
            const id = this.props.userId;
            const postListByUserApi = `http://${serverUrl}:4000/api/user/postList/` + id;
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
            <div>
            <ul className="job-listings mb-5">
                {(this.state.pageOfItems || []).map((post,idx) =>
                    <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center" key={idx}>
                        <Link to={{pathname:"/research-detail", state:{loggedIn:loggedIn, userId:userId, isStudent:isStudent, postid: post._id, userPostList:this.state.userPostList}}}></Link>

                    <div className="job-listing-logo">
                        {post.type === 0 &&
                        <img src={taImg} className="img-fluid"/>
                        }
                        {post.type === 1 &&
                        <img src={userStudyImg} className="img-fluid"/>
                        }
                        {post.type === 2 &&
                        <img src={researchImg} className="img-fluid"/>
                        }
                    </div>
                      <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                        <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                          <h2>{post.jobName}</h2>
                          <strong>{this.trimDescrp(post.description)}</strong>
                        </div>
                        <div className="job-listing-meta">
                            <span className="icon-date_range"></span>{new Date(post.dateCreated).toDateString()}
                        </div>
                        <div className="job-listing-meta">
                        {post.type === 0 &&
                            <span className="badge badge-success">Grader/Class Assistant</span>
                        }
                        {post.type === 1 &&
                            <span className="badge badge-primary">User Study</span>
                        }
                        {post.type === 2 &&
                            <span className="badge badge-info">Research Assistant</span>
                        }

                        </div>
                      </div>
                    </li>
                )}

            </ul>
             <Pagination items={postList} onChangePage={this.onChangePage} />
            </div>
        );

    }
}
export default ResearchList
