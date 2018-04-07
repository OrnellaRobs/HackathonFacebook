import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Header from '../images/HeaderHelpSeeker.png';

class HeaderHelpSeeker extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div >
        <img src={Header} />
      </div>
    );
  }
}

const styles = {
  facebookHeader: {
    display: 'flex',
    width: '100%',
    height: '29px',
    backgroundImage: `url(${Header})`,
    backgroundSize: 'contain',
  }
}

export default injectSheet(styles)(HeaderHelpSeeker);
