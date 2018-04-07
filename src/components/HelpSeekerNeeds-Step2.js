import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import { Link } from 'react-router-dom';

class HelpSeekerNeedsStep2 extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.container}>
        <HeaderHelpSeeker/>
        <div className={classes.mainContainer}>
        
          <div className={classes.facebookAssist}>
            Facebook Assist
          </div>
          
          
         {/*<div className={classes.msgAskNeeds}>
            Please, provide a few details.
          </div>
          */}
          
          <textarea className={classes.detailsTextarea} placeholder="Provide some details...">
          </textarea>
          
            <button className={classes.buttonAssistance}>
              Find helpers around you
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
    padding: '30px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '40px',
  },
  facebookAssist: {
    display: 'flex',
    justifyContent: 'center',
    color: '#404040',
  },
  msgAskNeeds: {
    margin: '20px',
    fontSize: '20px',
  },
  detailsTextarea: {
    width: '100%',
    height: '150px',
    fontSize: '20px',
    marginTop: '20px',
    padding: '5px',
  },
  buttonAssistance: {
  marginTop: '30px',
  border: 'none',
  color: 'white',
  borderRadius: '4px',
  padding: '12px',
  fontSize: '20px',
  backgroundColor: '#3578E5',
  width: '100%',
  '&:hover': {
    opacity: '0.45',
    },
  }
}

export default injectSheet(styles)(HelpSeekerNeedsStep2);