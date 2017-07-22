import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../api/employees.js';
import { List } from 'material-ui/List';
import Employee from './Employee'
import Sidemenu from './Sidemenu'

const muiTheme = getMuiTheme({
	fontFamily: 'Open Sans',
	palette: {
		primary1Color: red700,
	},
  	appBar: {
    	height: 50,
  	},
});
class TeamList extends Component{
	renderEmployees(){
		return this.props.employees.map((employee) => {
			if (employee.skills) {
				return(<div className="col m2"><Employee key={employee._id} employee={employee}/></div>)
			};
		})
	}
	renderColumn() {
		var opportunityLevel = Math.random();
		if (0 <= opportunityLevel < 0.17) {
			return "col m2"
		} else if (0.17 <= opportunityLevel < 0.33) {
			return "col m2 height30  green lighten-4"
		} else if (0.33 <= opportunityLevel < 0.5) {
			return "col m2 height30  green lighten-2";
		} else if (0.5 <= opportunityLevel < 0.66) {
			return "col m2 height30  green";
		} else if (0.66 <= opportunityLevel < 0.83) {
			return "col m2  height30 green darken-2";
		} else {
			return "col m2 green darken-4";
		}

	}
	renderEmployeeGrid() {
		return (
			<div className="row">
				{ this.renderEmployees() } 
				<div className={ this.renderColumn() }></div>
				<div className={ this.renderColumn() }></div>
				<div className={ this.renderColumn() }></div>
				<div className={ this.renderColumn() } ></div>
				<div className={ this.renderColumn() } ></div>
			</div>
		);
	}
	render(){
		console.log(this.renderColumn());
		return (
			<MuiThemeProvider muiTheme={muiTheme}> 
				<div>
					<Sidemenu />
					<div className="container">
						<div className="row center-align">
							<div className="col m2 offset-m2">
								{'Team Lead'}
							</div>
							<div className="col m2">
								{'Code Review'}
							</div>
							<div className="col m2">
								{'Brownbag'}
							</div>
							<div className="col m2">
								{'Mentor'}
							</div>
							<div className="col m2">
								{'Scrum Leader'}
							</div>
						</div>
						{ this.renderEmployeeGrid() }
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}
TeamList.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    employees: Employees.find({}).fetch(),
  };
}, TeamList);

// 