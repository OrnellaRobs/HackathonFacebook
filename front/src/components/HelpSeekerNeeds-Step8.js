import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import hands from '../images/peoplehands.jpg';
import { Link } from 'react-router-dom';

class HelpSeekerNeedsStep8 extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <HeaderHelpSeeker />
        <div className={classes.mainContainer}>
        
          <div className={classes.facebookAssist}>
            Facebook Assist
          </div>
          
          <div className={classes.msgAskNeeds}>
            Is everything ok now?
          </div>
          
          <div styles={{marginTop: '20px'}}>
          <div className={classes.buttonWrapper}>
            <Link to="/HelpSeeker/Step1">
            <button className={classes.buttonYes} style={{ backgroundColor: '#4360b3', color: '#f6f7f9' }}>
                Yes
            </button>
            </Link>
            <Link to="/HelpSeeker/Step1">
            <button className={classes.buttonYes} style={{ backgroundColor: '#f6f7f9', color: '#4360b3' }}>
              No
            </button>
            </Link>
        </div>
          </div>
          
          <div className={classes.handsWrapper}>
            <img src={hands} className={classes.handsImg} />
          </div>
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
    // alignItems: 'center',
    flexDirection: 'column',
    fontSize: '40px',
  },
  facebookAssist: {
    display: 'flex',
    justifyContent: 'center',
    color: '#404040',
  },
  titleEmergency: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '95%',
    fontSize: '30px',
    textAlign: 'center',
    color: 'grey',
  },
  emergency: {
    display: 'flex',
    margin: '5px',
    fontSize: '20px',
  },
  buttonAssistance: {
    marginTop: '120px',
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
  },
  handsImg: {
    width: '100%',
     position: 'absolute',
    // bottom: '0%',
    bottom: '0px'
  },
  handsWrapper: {
    position: 'absolute',
    width: '90%',
    height: '88%',
    zIndex: '-99',
  },
  msgAskNeeds: {
    margin: '30px',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonYes: {
    marginBottom: '20px',
    padding: '15px 70px',
    fontSize: '15px',
    borderRadius: '4px',
  },
}
export default injectSheet(styles)(HelpSeekerNeedsStep8);