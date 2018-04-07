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
          {/* <div> */}
          <button>
            You need help
            </button>
          {/* </div> */}
        </div>
        <img src={hands} className={classes.handsImg} />
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
    justifyContent: 'center',
    fontSize: '60px',
  },
  button: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontFamily: 'MS Serif, New York, sans-serif',
    fontSize: '14px',
    letterSpacing: '0.5px',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  handsImg: {
    width: '100%',
    // position: 'absolute',
    // bottom: '0%',
  }
}
export default injectSheet(styles)(HomeHelpSeeker);
