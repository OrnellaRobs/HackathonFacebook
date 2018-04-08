import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import Notif from '../images/notif.png';
import { Link } from 'react-router-dom';
import mhammerc from '../images/large_mhammerc.jpg';
import map3 from '../images/map3.png';
import messenger from '../images/messenger.png';
import lara from '../images/large_lramirez.jpg';

class HelperStep2 extends Component {
  state = {
    details: '',
  }
  
  componentWillMount() {
      const xmlHttp = new XMLHttpRequest();
      
      xmlHttp.open( "GET", "http://34.242.216.10:3000/get_description", false);
      xmlHttp.send( null );
      this.setState({ details: xmlHttp.responseText.text });
  }
    submitYes()
    {
      const req = new XMLHttpRequest();
        
      const redirect = () => this.props.history.push('/Helper/Step3');
        
      req.onreadystatechange = function(event)
      {
        if (this.readyState === XMLHttpRequest.DONE)
        {
            redirect();
        }
      }
      
      req.open('GET', 'http://34.242.216.10:3000/helper_ready', true);
      req.send(null);  
      
    }
    
  render() {
    const { classes } = this.props;
    
    return (
        <div className={classes.container}>
          <HeaderHelpSeeker/>
          <div className={classes.mainContainer}>
            <div className={classes.facebookAssist}>
              Can you assist Lara?
            </div>
            <div>
            <div className={classes.wrapperHelperMsg}>
              <img src={lara} className={classes.helperInfo}/>
              <div className={classes.helperPhotoMessenger}>
                <div className={classes.test}>
                  {this.state.details}
                </div>
              </div>
            </div>
            <div className={classes.buttonWrapper}>
               <button onClick={this.submitYes.bind(this)} className={classes.buttonYes} style={{ backgroundColor: '#4360b3', color: '#f6f7f9' }}>
                  Confirm
                </button>
                <button className={classes.buttonYes} style={{ backgroundColor: '#f6f7f9', color: '#4360b3' }}>
                  Decline
                </button>
            </div>
            <div className={classes.msgComing}>
              She is
              <span className={classes.msgMinutes}>5 minutes</span>
              away
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
    margin: '0 5px',
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
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonYes: {
    marginBottom: '20px',
    padding: '15px 70px',
    fontSize: '15px',
    borderRadius: '4px',
  }
}


export default injectSheet(styles)(HelperStep2);