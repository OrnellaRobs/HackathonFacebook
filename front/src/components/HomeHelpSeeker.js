import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import hands from '../images/peoplehands.jpg';
import emergency from '../images/emergency.png';
import { Link } from 'react-router-dom';

class HomeHelpSeeker extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <HeaderHelpSeeker />
        <div className={classes.mainContainer}>
        
          <div className={classes.facebookAssist}>
            Facebook Assist
          </div>
          
          <img className={classes.emergencyImg} src={emergency}/>
          
          <table className={classes.tableClass}>
            <tr><td>Police</td><td>17</td></tr>
            <tr><td>Fire</td><td>18</td></tr>
            <tr><td>Ambulance</td><td>15</td></tr>
            <tr><td>European emergency number</td><td>112</td></tr>
          </table>
          
          <div styles={{marginTop: '20px'}}>
          <Link to="/HelpSeeker/Step1">
            <button className={classes.buttonAssistance}>
              Ask for assistance around you
            </button>
          </Link>
          </div>
          
          <div className={classes.handsWrapper}>
            <img src={hands} className={classes.handsImg} />
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
    // alignItems: 'center',
    flexDirection: 'column',
    fontSize: '40px',
  },
  facebookAssist: {
    display: 'flex',
    justifyContent: 'center',
    color: '#404040',
  },
  titleEmergency: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '95%',
    fontSize: '30px',
    textAlign: 'center',
    color: 'grey',
  },
  emergencyNumbersList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    fontSize: '15px',
    marginLeft: '40px',
  },
  tableClass: {
    //display: 'flex',
    fontSize: '20px',
    opacity: '0.85',
    width: '380px',
    marginLeft: '40px',
    marginTop: '15px',
  },
  emergency: {
    display: 'flex',
    margin: '5px',
    fontSize: '20px',
  },
  emergencyImg:
  {
    marginTop: '20px',
    width: '100%', 
    height: 'auto',
  },
  emergencyNumber: {
    marginRight: '5px',
  },
  buttonAssistance: {
    marginTop: '120px',
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
  },
  handsImg: {
    width: '100%',
     position: 'absolute',
    // bottom: '0%',
    bottom: '0px'
  },
  handsWrapper: {
    position: 'absolute',
    width: '90%',
    height: '88%',
    zIndex: '-99',
  },
}
export default injectSheet(styles)(HomeHelpSeeker);
