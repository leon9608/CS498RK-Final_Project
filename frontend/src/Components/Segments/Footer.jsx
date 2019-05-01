import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component{
    render() {
        const loggedIn = this.props.loggedIn;
        return (
            <footer className="site-footer">

              <div className="container">
                <div className="row mb-5 justify-content-center text-center">
                  <div className="col-6 col-md-3 mb-4 mb-md-0">
                    <h3>Contact Us</h3>
                    <div className="footer-social">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><span className="icon-facebook"></span></a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><span className="icon-twitter"></span></a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span className="icon-instagram"></span></a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
        );
    }
}

export default Footer
