import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import hands from '../images/peoplehands.jpg';

class HomeHelpSeeker extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <HeaderHelpSeeker />
        <div className={classes.mainContainer}>
          <div>Facebook Assist</div>
          <div className={classes.titleEmergency}>
            Need assistance ? Here are local emergency numbers:
          </div>
          <button className={classes.button1}>
            Ask for assistance
            </button>
          <img src={hands} className={classes.handsImg} />
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
    fontSize: '60px',
  },
  titleEmergency: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    fontSize: '20px',
    color: 'grey',
  },
  button1: {
    border: 'none',
    color: 'white',
    borderRadius: '10px',
    padding: '20px',
    fontSize: '20px',
    backgroundColor: 'blue',
  },
  // button: {
  //   background: 'none',
  //   border: 'none',
  //   color: 'white',
  //   fontFamily: 'MS Serif, New York, sans-serif',
  //   fontSize: '14px',
  //   letterSpacing: '0.5px',
  //   outline: 'none',
  //   '&:hover': {
  //     cursor: 'pointer',
  //   },
  // },
  handsImg: {
    width: '100%',
    // position: 'absolute',
    // bottom: '0%',
  }
}
export default injectSheet(styles)(HomeHelpSeeker);
