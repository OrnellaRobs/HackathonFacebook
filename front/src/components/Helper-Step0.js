import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import Notif from '../images/notif0.png';
import { Link } from 'react-router-dom';

class HelperStep0 extends Component {
  componentDidMount() {
    
      const interval = setInterval(() =>
      {
        const req = new XMLHttpRequest();
        
        const redirect = () => this.props.history.push('/Helper/Step1');
        
        req.onreadystatechange = function(event)
        {
          if (this.readyState === XMLHttpRequest.DONE)
          {
            let res = 0;
            
            try{
            res = JSON.parse(this.responseText);
            }catch(e){
              return;
            }
            
            if (res && res.status === true)
            {
              clearInterval(interval);
              redirect();
            }
          }
        }
        
        req.open('GET', 'http://34.242.216.10:3000/help_needed', true);
        req.send(null);  
      }, 100);
      
  }
  
  render() {
    const { classes } = this.props;
    
    return (
      <div  className={classes.container}>
        <img src={Notif} style={{width: '100%'}}/>
      </div>
    );
  }
}

const styles = {
  '@global': {
		textarea: {
			outline: 'none',
		},
	},
  container: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '40px',
  },
  facebookAssist: {
    display: 'flex',
    justifyContent: 'center',
    color: '#404040',
  },
  msgAskNeeds: {
    margin: '30px',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  
  wrapperNeeds: {
    marginLeft: '90px',
    '& > a': {
      outline: 'none',
    }
  },
  needsContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px',
    '&:hover': {
      opacity: '0.6',
    }
  },
  assitReason: {
    fontSize: '18px',
    marginLeft: '50px',
  }
}

export default injectSheet(styles)(HelperStep0);