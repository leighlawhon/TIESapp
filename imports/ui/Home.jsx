import React, { Component } from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import RaisedButton from 'material-ui/RaisedButton'; 
 
export default class NotFound extends Component{ 
  render(){ 
    return ( 
      <div> 
        <h1>{'Keeping Unconscious Bias in check'}</h1> 
        <p className="intro"> 
          Since 2014, Tech companies have been disclosing their diversity numbers semi-annually. However, the demonstrated progress has been very slow.   
           
        </p>
        <ul className="intro"> 
            <li>• Microsoft announced that it would tie <strong>executive bonuses</strong> to diversity goals. </li> 
            <li>• In 2015, Google donated <strong>$150 MILLIONS</strong> to diversity efforts </li> 
            <li>• Apple similarly pledged <strong>$50 MILLIONS</strong></li> 
          </ul> 
        <p className="intro"> 
          {'The budget is there, but the tech firms don’t know how to spend it. Therefore, to address the challenge, we are build this amazing equal opportunity tracking application to improve hiring process, team building and leadership development.'} 
        </p> 
      </div> 
    ) 
  } 
}
