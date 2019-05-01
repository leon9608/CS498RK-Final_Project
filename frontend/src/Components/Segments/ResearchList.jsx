import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ResearchList extends Component{
    render(){
        const {postList, loggedIn, userId, isStudent} = this.props;
        return (
            <ul className="job-listings mb-5">
                {postList.map((post,idx) =>
                    <li className="job-listing d-block d-sm-flex pb-3 pb-sm-0 align-items-center" key={idx}>
                        <Link to={{pathname:"/research-detail", state:{loggedIn:loggedIn, userId:userId, isStudent:isStudent}}}></Link>

                      <div className="job-listing-about d-sm-flex custom-width w-100 justify-content-between mx-4">
                        <div className="job-listing-position custom-width w-50 mb-3 mb-sm-0">
                          <h2>{post.jobName}</h2>
                          <strong>{post.description}</strong>
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
