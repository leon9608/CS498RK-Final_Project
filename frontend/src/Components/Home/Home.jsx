import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

// 'Home' is already defined as the classNameName name, so provide an alias
// 'Home-header' from the SCSS file gets transformed to 'HomeHeader'
//    because '-' is not allowed in JS variable names

// import { Home as HomeCss, HomeHeader } from './Home.module.scss'

class Home extends Component {
  render() {
    return (
        //convert index.html to react components
        <div className="loader">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
    );
  }
}

export default Home
