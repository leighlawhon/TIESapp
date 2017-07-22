import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../api/employees.js';
import { Skills } from '../api/skills.js';

import { List } from 'material-ui/List';
import Employee from './Employee'
import SkillCard from './SkillCard'
import Sidemenu from './Sidemenu'
import LineChart from 'recharts';
import Line from 'recharts';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const muiTheme = getMuiTheme({
	fontFamily: 'Open Sans',
	palette: {
		primary1Color: red700,
	},
  	appBar: {
    	height: 50,
  	},
});
var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'BMI',
        name: 'BMI',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }
const business = [
      {name: 'Marketing', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Leadership', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Methodologies', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Analysis', uv: 2780, pv: 3908, amt: 2000},
];

class TeamList extends Component{
	renderSkills(){
		console.log(this.props.employees)
		// return this.props._list.map((skill) => {
		// 	return(<SkillCard key={skill._id} employee={skill}></SkillCard>)
		// })
	}
	render(){
		return (
			<MuiThemeProvider muiTheme={muiTheme}> 
				<div>
					<Sidemenu />
					<div className="container">
						<div className="row">
							<h1>Team Building</h1>
							<SkillCard header={'Business'}>
								<BarChart width={600} height={300} data={business}
							            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
							       <XAxis dataKey="name"/>
							       <YAxis/>
							       <CartesianGrid strokeDasharray="3 3"/>
							       <Tooltip/>
							       <Legend />
							       <Bar dataKey="pv" stackId="a" fill="#8884d8" />
							       <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
							      </BarChart>
							</SkillCard>
							<SkillCard header={'Coding'}>

							</SkillCard>
							<SkillCard header={'DevOps'}>
								
							</SkillCard>
							<SkillCard header={'Assets'}>
								
							</SkillCard>
						</div>
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
    skills_list: Skills.find({}).fetch(),
  };
}, TeamList);

// 