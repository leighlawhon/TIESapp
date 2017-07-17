import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Employees from '../api/employees'

export default class newEmployee extends Component{
	submitEmployee(event){
		console.log(Employees)
		event.preventDefault();

		const employeeVal = {
			team: this.refs.team.value,
			first_name: this.refs.first_name.value,
			last_name: this.refs.last_name.value,
			javascript: this.refs.javascript.value,
			css: this.refs.css.value,
			// createdAt: new Date(),
		};
		// Employees.insert(employeeVal);
		Meteor.call('employees.insert', employeeVal);
		console.log("success")
		this.props.history.push('/');
	}
	render(){
		return (
			<div className="row">
				<form onSubmit={this.submitEmployee.bind(this)}>
					<h3>{'Add new Employee'}</h3>
					<div className="row">
						<div className="input-field col s4">
							<input placeholder="First Name" ref="first_name" type="text" className="validate"/>
						</div>
						<div className="input-field col s4">
							<input placeholder="Last Name" ref="last_name" type="text" className="validate"/>
						</div>
						<div className="input-field col s4">
							<input placeholder="Last Name" ref="team" type="text" className="validate"/>
						</div>
					</div>
					<div className="row">
						<h3>Skills</h3>
						<div className="input-field col s6">
							<h5 htmlFor="javascript">Javascript</h5>
							<select ref="javascript" className="browser-default clear" name="javascript">
								<option value="0">{'0 – Has not demonstrated skill'}</option>
								<option value="1">{'1 – Needs improvement'}</option>
								<option value="2">{'2 – Skill acquired'}</option>
								<option value="3">{'3 – Can teach others'}</option>
							</select>
							
						</div>
						<div className="input-field col s6">
							<h5 htmlFor="css">CSS</h5>
							<select ref="css" className="browser-default clear" name="css">
								<option value="0">{'0 – Has not demonstrated skill'}</option>
								<option value="1">{'1 – Needs improvement'}</option>
								<option value="2">{'2 – Skill acquired'}</option>
								<option value="3">{'3 – Can teach others'}</option>
							</select>
							
						</div>
						
					</div>
					<div className="row">
						<h3>Notes</h3>
						<div className="input-field col s6">
							<input type="textarea" className="materialize-textarea" placeholder="Notes"/>
						</div>
						<div className="input-field col s6">
							<button className="btn waves-effect wave-light" type="submit" name="action">Add Employee</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}