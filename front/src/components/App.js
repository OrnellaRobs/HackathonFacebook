import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeHelpSeeker from './HomeHelpSeeker';
import HelpSeekerNeedsStep1 from './HelpSeekerNeeds-Step1';
import HelpSeekerNeedsStep2 from './HelpSeekerNeeds-Step2';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={HomeHelpSeeker} />
            <Route path="/HelpSeeker/Step1" exact component={HelpSeekerNeedsStep1} />
            <Route path="/HelpSeeker/Step2" exact component={HelpSeekerNeedsStep2} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
