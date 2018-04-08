import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeHelpSeeker from './HomeHelpSeeker';
import HelpSeekerNeedsStep1 from './HelpSeekerNeeds-Step1';
import HelpSeekerNeedsStep2 from './HelpSeekerNeeds-Step2';
import HelpSeekerNeedsStep3 from './HelpSeekerNeeds-Step3';
import HelpSeekerNeedsStep4 from './HelpSeekerNeeds-Step4';
import HelpSeekerNeedsStep5 from './HelpSeekerNeeds-Step5';
import HelpSeekerNeedsStep6 from './HelpSeekerNeeds-Step6';
import HelpSeekerNeedsStep7 from './HelpSeekerNeeds-Step7';
import HelpSeekerNeedsStep8 from './HelpSeekerNeeds-Step8';

import HelperStep0 from './Helper-Step0';
import HelperStep1 from './Helper-Step1';
import HelperStep2 from './Helper-Step2';
import HelperStep3 from './Helper-Step3';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={HomeHelpSeeker} />
            <Route path="/HelpSeeker/Step1" exact component={HelpSeekerNeedsStep1} />
            <Route path="/HelpSeeker/Step2" exact component={HelpSeekerNeedsStep2} />
            <Route path="/HelpSeeker/Step3" exact component={HelpSeekerNeedsStep3} />
            <Route path="/HelpSeeker/Step4" exact component={HelpSeekerNeedsStep4} />
            <Route path="/HelpSeeker/Step5" exact component={HelpSeekerNeedsStep5} />
            <Route path="/HelpSeeker/Step6" exact component={HelpSeekerNeedsStep6} />
            <Route path="/HelpSeeker/Step7" exact component={HelpSeekerNeedsStep7} />
            <Route path="/HelpSeeker/Step8" exact component={HelpSeekerNeedsStep8} />
            
            <Route path="/Helper/Step0" exact component={HelperStep0} />
            <Route path="/Helper/Step1" exact component={HelperStep1} />
            <Route path="/Helper/Step2" exact component={HelperStep2} />
            <Route path="/Helper/Step3" exact component={HelperStep3} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
