import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import map from '../images/map.png';
import { Link } from 'react-router-dom';

class HelpSeekerNeedsStep3 extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.container}>
        <HeaderHelpSeeker/>
        <div className={classes.mainContainer}>
            <img src={ map } className={classes.map}/>
            
            <Link to="/HelpSeeker/Step4" style={{width: '100%'}} >
            <button className={classes.buttonAssistance}>
              Confirm location
            </button>
            </Link>
          
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
  marginLeft: '7%',
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
  map: {
  width: '100%',
  height: 'auto',
  },
}

export default injectSheet(styles)(HelpSeekerNeedsStep3);