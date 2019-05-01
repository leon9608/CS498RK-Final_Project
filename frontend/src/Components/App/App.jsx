import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';


import Home from '../Home/Home.jsx';
import Login from '../Login/login.jsx';
import Register from '../Login/register.jsx';
import About from '../Home/About.jsx';
import ResearchListing from "../Research/ResearchListing.jsx";
import SearchResultListing from "../Research/SearchResultListing.jsx";
import ResearchDetail from "../Research/ResearchDetail.jsx";
import PostResearch from "../Research/PostResearch.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/research-listing" component={ResearchListing}/>
          <Route exact path="/search-result" component={SearchResultListing}/>
          <Route exact path="/research-detail" component={ResearchDetail}/>
          <Route exact path="/create-research" component={PostResearch}/>

        </Switch>
      </Router>
    );
  }
}

export default App;
