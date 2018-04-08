import React, { Component } from 'react';
import injectSheet from 'react-jss';
import HeaderHelpSeeker from './HeaderHelpSeeker';
import loader from '../images/loader.gif';
import mhammerc from '../images/large_mhammerc.jpg';
import map2 from '../images/map2.png';
import messenger from '../images/messenger.png';

class HelpSeekerNeedsStep6 extends Component {
  componentDidMount() {
    
      const interval = setInterval(() =>
      {
        const req = new XMLHttpRequest();
        
        const redirect2 = () => this.redirect();
        
        req.onreadystatechange = function(event)
        {
          if (this.readyState === XMLHttpRequest.DONE)
          {
            let res = null; 
            try{
            res = JSON.parse(this.responseText);
            }catch(e){
              return;
            }
            
            if (res && res.status === true)
            {
              clearInterval(interval);
              redirect2();
            }
          }
        }
        
        req.open('GET', 'http://34.242.216.10:3000/helper_call', true);
        req.send(null);  
      }, 100);
      
  }
  
  redirect() {
    this.props.history.push('/HelpSeeker/Step7');
  }
  
  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.container}>
        <HeaderHelpSeeker/>
        <div className={classes.mainContainer}>
          <div className={classes.searching}>
            Waiting for an answer...
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

export default injectSheet(styles)(HelpSeekerNeedsStep6);