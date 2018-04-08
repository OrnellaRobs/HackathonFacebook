import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HelpSeekerNeedsStep1 from './HelpSeekerNeeds-Step1';
import Ornella from '../images/large_orazafin.jpg';
import Martin from '../images/large_mhammerc.jpg';
import Victor from '../images/large_vfour.jpg';
import Lena from '../images/large_lgiacalo.jpg';
import { Link } from 'react-router-dom';

class HelpSeekerNeedsStep5 extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.container}>
        <HeaderHelpSeeker/>
        <div className={classes.mainContainer}>
        
        <div className={classes.msgAskNeeds}>
            We found 5 trusted helpers
          </div>
        
          <div className={classes.helperPhotoName}>
            <img src={Ornella} className={classes.avatar} style={{float: 'left'}}/> 
            <div style={{float: 'right', verticalAlign: 'middle'}}>Ornella</div>
          </div>
          
          <div className={classes.helperPhotoName}>
            <img src={Martin} className={classes.avatar} style={{float: 'left'}}/> 
            <div style={{float: 'right', verticalAlign: 'middle'}}>Martin</div>
          </div>
          
          <div className={classes.helperPhotoName}>
            <img src={Victor} className={classes.avatar} style={{float: 'left'}}/> 
            <div style={{float: 'right', verticalAlign: 'middle'}}>Martin</div>
          </div>
          
          <div className={classes.helperPhotoName}>
            <img src={Lena} className={classes.avatar} style={{float: 'left'}}/> 
            <div style={{float: 'right', verticalAlign: 'middle'}}>Lena</div>
          </div>
          
          <Link to="/HelpSeeker/Step6" style={{width: '100%'}} >
            <button className={classes.buttonAssistance}>
              Reach out for assistance
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
  msgAskNeeds: {
    margin: '30px',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  helperPhotoName: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '18px',
  },
  buttonAssistance: {
  marginTop: '20px',
  marginLeft: '40px',
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
  avatar: {
    borderRadius: '65px',
    width: '130px',
    height: 'auto',
    marginRight: '30px',
  },
  separator: {
    marginTop: '10px',
    marginBottom: '10px',
    color: '#707070',
    clear: 'both',
  }
}

export default injectSheet(styles)(HelpSeekerNeedsStep5);