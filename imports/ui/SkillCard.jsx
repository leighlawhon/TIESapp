import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';

export default class Employee extends Component{
	render(){
		return (
			<Card>
			    <CardHeader>
			       
			    <h2 className="cardHead">
			    	<span className="">
			    		<i className="material-icons iconCard">code</i> {this.props.header}
			    	</span>
			    </h2>
			    </CardHeader>

			    <CardText>
			    	{this.props.children}
			    </CardText>
			</Card>
		)
	}
}