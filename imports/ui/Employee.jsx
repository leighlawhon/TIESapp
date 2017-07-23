import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {ListItem} from 'material-ui/List';

export default class Employee extends Component{
	renderColumn() {
		var opportunityLevel = Math.random();
		if (0 <= opportunityLevel < 0.17) {
			return "col m2 height30"
		} else if (0.17 <= opportunityLevel < 0.33) {
			return "col m2 height30  green lighten-4"
		} else if (0.33 <= opportunityLevel < 0.5) {
			return "col m2 height30  green lighten-2";
		} else if (0.5 <= opportunityLevel < 0.66) {
			return "col m2 height30  green";
		} else if (0.66 <= opportunityLevel < 0.83) {
			return "col m2  height30 green darken-2";
		} else {
			return "col m2 green darken-4 height30";
		}

	}
	renderEmployeeGrid() {
		return (
			<div className="row">
				
			</div>
		);
	}
	render(){
		return (
			<div className="row">
				<div className="col m2"> { this.props.employee.name }</div>
				<div className={ this.renderColumn() }></div>
				<div className={ this.renderColumn() }></div>
				<div className={ this.renderColumn() }></div>
				<div className={ this.renderColumn() } ></div>
				<div className={ this.renderColumn() } ></div>
			</div>
		)
	}
}