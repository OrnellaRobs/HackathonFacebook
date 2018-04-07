import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HelpSeekerNeedsStep1 from './HelpSeekerNeeds-Step1';
class HelpSeekerNeedsStep5 extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.container}>
        <HeaderHelpSeeker/>
        <div className={classes.mainContainer}>
            <button className={classes.buttonAssistance}>
              Reach out for assistance
            </button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '40px',
  },
  buttonAssistance: {
  marginTop: '20px',
  border: 'none',
  color: 'white',
  borderRadius: '4px',
  padding: '12px',
  fontSize: '20px',
  backgroundColor: '#3578E5',
  width: '85%',
  '&:hover': {
    opacity: '0.45',
    },
  },
}

export default injectSheet(styles)(HelpSeekerNeedsStep5);