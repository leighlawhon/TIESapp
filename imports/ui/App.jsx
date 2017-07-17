import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TeamList from './Team-list';
import CompanyStats from './Company-stats';
import Candidate from './Candidate';

import { createContainer } from 'meteor/react-meteor-data';
 
import { Employees } from '../api/employees.js';

class App extends Component{
	constructor(props) {
		super(props);

		this.state = {
			employees: []
		}
	}
	componentWillMount() {
		this.setState({
			employees: [
				{
					_id: 0,
					first_name: "leigh",
					last_name: "lawhon",
					skills: []
				}
			]
		})
	}
	renderEmployees(){
		return this.props.employees.map((employee) => {
			return(<TeamList key={employee._id} employee={employee}/>)
		})
	}
	render(){
		return (
			<MuiThemeProvider>
				<section>
					<AppBar />
					<div className="container">
						<div className="row">
							<Candidate/>
							<List>{ this.renderEmployees() }</List>
							<CompanyStats/>
							<Divider />

						</div>
						
					</div>
				</section>
			</MuiThemeProvider>
		)
	}
}

App.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    employees: Employees.find({}).fetch(),
  };
}, App);