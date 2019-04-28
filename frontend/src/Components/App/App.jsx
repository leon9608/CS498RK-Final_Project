import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';


// import logo from './logo.svg';
// import './App.css';


import Home from '../Home/Home.jsx';
import LoginPage from '../Login/login.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/*
            Add routes for new pages here!
            Here's an example. To view this route, just go to http://localhost:3000/example
          */}
          <Route exact path="/login" component={LoginPage}/>

        </Switch>
      </Router>
    );
  }
}

export default App;
