import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import help1 from '../images/help1.png';
import help2 from '../images/help2.png';
import help3 from '../images/help3.png';
import help4 from '../images/help4.png';

class HelpSeekerNeedsStep1 extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div  className={classes.container}>
        <HeaderHelpSeeker/>
        <div className={classes.mainContainer}>
          <div className={classes.facebookAssist}>
            Facebook Assist
          </div>
          <div className={classes.msgAskNeeds}>
            What's happening?
          </div>
          <div className={classes.wrapperNeeds}>
            <div className={classes.needsContainer}>
              <img src={help1} style={{ width: '100px', height: '100px' }}/>
              <div className={classes.assitReason}>
                I feel unwell
              </div>
            </div>
            <div className={classes.needsContainer}>
              <img src={help4} style={{ width: '100px' }}/>
              <div className={classes.assitReason}>
                I am stuck
              </div>
            </div>
            <div className={classes.needsContainer}>
              <img src={help2} style={{ width: '100px' }}/>
              <div className={classes.assitReason}>
                I feel unsafe
              </div>
            </div>
            <div className={classes.needsContainer}>
              <img src={help3} style={{ width: '100px' }}/>
              <div className={classes.assitReason}>
                Other
            </div>
          </div>
          </div>
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

export default injectSheet(styles)(HelpSeekerNeedsStep1);