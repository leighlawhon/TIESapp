import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Employee extends Component{
	render(){
		return (
			<Card>
			    <CardHeader
			      title={this.props.header}
			    />
			    <CardText>
			    	{this.props.children}
			    </CardText>
			</Card>
		)
	}
}