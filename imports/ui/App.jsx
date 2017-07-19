import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blueGrey600} from 'material-ui/styles/colors';

import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TeamList from './Team-list';
import CompanyStats from './Company-stats';
import Candidate from './Candidate';
import Sidemenu from './Sidemenu';

import { createContainer } from 'meteor/react-meteor-data';
 
import { Employees } from '../api/employees.js';
import { Companies } from '../api/companies.js';
const muiTheme = getMuiTheme({
	fontFamily: 'Open Sans',
	palette: {
		primary1Color: blueGrey600,
	},
  	appBar: {
    	height: 50,
  	},
});
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
	// ToDO: figure out how to nest routing...it has changed
	render(){
		return (
			<MuiThemeProvider muiTheme={muiTheme}> 
				<div>
					<Sidemenu />
					<div className="container">
						<div className="row">
							<Candidate/>
							<List>{ this.renderEmployees() }</List>
							<CompanyStats/>
							<Divider />
						</div>
					</div>
				</div>
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
    companies: Companies.find({}).fetch(),
  };
}, App);