import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import loader from '../images/loader.gif';

class HelpSeekerNeedsStep4 extends Component {
  componentDidMount() {
      setTimeout(() => this.redirect(), 2000);
  }
  
  redirect() {
    this.props.history.push('/HelpSeeker/Step5');
  }
  
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.container}>
        <HeaderHelpSeeker/>
        <div className={classes.mainContainer}>
        
          <div className={classes.searching}>
            Finding helpers...
          </div>
          <img src={ loader }/>
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
  searching: {
    marginTop: '100px',
    fontSize: '30px',
  }
}

export default injectSheet(styles)(HelpSeekerNeedsStep4);