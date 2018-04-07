import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './Test';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Test} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
