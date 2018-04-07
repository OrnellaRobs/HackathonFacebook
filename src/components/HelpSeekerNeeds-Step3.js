import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';

class HelpSeekerNeedsStep3 extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.container}>
        <HeaderHelpSeeker/>
        <div className={classes.mainContainer}>
        
            <button className={classes.buttonAssistance}>
              Confirm location
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

export default injectSheet(styles)(HelpSeekerNeedsStep3);