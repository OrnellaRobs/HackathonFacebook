import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import Notif from '../images/notif.png';
import { Link } from 'react-router-dom';

class HelperStep1 extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div  className={classes.container}>
      
        <Link to="/Helper/Step2">
          <img src={Notif} style={{width: '100%'}}/>
        </Link> 
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

export default injectSheet(styles)(HelperStep1);