import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {ListItem} from 'material-ui/List';

export default class Employee extends Component{
	render(){
		return (
			<div>{ this.props.employee.name }</div>
		)
	}
}