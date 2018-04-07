import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Header from '../images/HeaderHelpSeeker.png';

class HeaderHelpSeeker extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div >
        <img src={Header} className={classes.facebookHeader} />
      </div>
    );
  }
}

const styles = {
  facebookHeader: {
    display: 'flex',
    width: '100%',
  }
}

export default injectSheet(styles)(HeaderHelpSeeker);
