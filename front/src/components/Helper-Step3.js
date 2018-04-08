import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import Notif from '../images/notif.png';
import { Link } from 'react-router-dom';
import mhammerc from '../images/large_mhammerc.jpg';
import map3 from '../images/map3.png';
import messenger from '../images/messenger.png';
import lara from '../images/large_lramirez.jpg';

class HelperStep3 extends Component {
  render() {
    const { classes } = this.props;
    
    return (
        <div className={classes.container}>
          <HeaderHelpSeeker/>
          <div className={classes.mainContainer}>
            <div className={classes.facebookAssist}>
              Facebook Assist
            </div>
            <div>
            <div className={classes.wrapperHelperMsg}>
              <img src={lara} className={classes.helperInfo}/>
              <div className={classes.helperPhotoMessenger}>
                <div className={classes.test}>
                  Lara is stuck.
                </div>
                <button className={classes.buttonMessenger}>
                  <img src={messenger} style={{ width: '40px', height: 'auto' }}/>
                  Open in Messenger
                </button>
              </div>
            </div>
            <div className={classes.msgComing}>
              She is 5 minutes away
              <span className={classes.msgMinutes}>5 minutes</span>
            </div>
            </div>
           <img src={map3} className={classes.map}/>
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
    paddingTop: '30px',
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
  wrapperHelperMsg: {
    margin: '30px',
    display: 'flex',
    alignItems: 'center',
  },
  helperInfo: {
    width: '120px',
    height: '120px',
    borderRadius: '100px',
  },
  helperPhotoMessenger: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    marginLeft: '20px',
    fontSize: '20px',
  },
  test: {
    marginBottom: '10px',
  },
  msgComing: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '18px',
    marginBottom: '20px',
  },
  msgMinutes: {
    marginLeft: '5px',
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: 'auto',
  },
  buttonMessenger: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    color: 'white',
    borderRadius: '4px',
    fontSize: '15px',
    backgroundColor: '#3578E5',
    width: '100%',
    '&:hover': {
      opacity: '0.45',
    },
  },
}


export default injectSheet(styles)(HelperStep3);