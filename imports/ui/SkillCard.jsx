import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SvgIcon from 'material-ui/SvgIcon';

export default class SkillCard extends Component{
	state = {
	    employee_stack: [],
	};
	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps', nextProps.employees);
		this.setState(
			{employee_stack: nextProps.employees}
		)
	}
	renderColor(score) {
		if (0 <= score < 0.17) {
			return " height30 "
		} else if (0.17 <= score < 0.33) {
			return " height30  green lighten-4 "
		} else if (0.33 <= score < 0.5) {
			return " height30  green lighten-2 ";
		} else if (0.5 <= score < 0.66) {
			return " height30  green";
		} else if (0.66 <= score < 0.83) {
			return "  height30 green darken-2 ";
		} else {
			return " green darken-4 height30 ";
		}

	}
	renderIcon(){
		let icon = ''
		switch(this.props.skill.skill ){
			case 'Business':
				icon = 'work';
				break;
			case 'Operations':
				icon = 'cloud_upload';
				break;
			case 'Data':
				icon = 'storage';
				break;
			case 'Cultural':
				icon = 'color_lens';
				break;
			case 'Assets':
				icon = 'image';
				break;
			case 'Coding':
				icon = 'code';
				break;
			case 'Hardware':
				icon = 'important_devices';
				break;
			case 'Research':
				icon = 'search';
				break;
			case 'QA':
				icon = 'bug_report';
				break;
		}
		return (<i className="material-icons iconCard">{icon}</i>)
	}
	renderSubSub(subskill, id){
		// console.log(this.state.employee_stack.length)
		// let block = '';
		// if(this.state.employee_stack.length > 0){
		// 	for (var i = this.state.employee_stack.length - 1; i >= 0; i--) {
		// 		block = (<div className={this.renderColor()} key={id}>{this.state.employee_stack[i].name}</div>)
		// 	}
		// }
		if(subskill.subskills) {
			return subskill.subskills.map((subsub) => (
				<div className="col m2" key={this.props.skill._id._str + "-" + subsub.skill}>
					{this.state.employee_stack.map((employee) => this.renderHeatMap(employee, subsub))}
					<div className="" >{subsub.skill}</div>
				</div>
			))
		}
	}
	renderHeatMap(employee, subskill){
		let score ='';
		for (var i = employee.skills.length - 1; i >= 0; i--) {
			console.log(employee.skills[i].skill, subskill)
			if (employee.skills[i].skill === subskill.skill){

				score = employee.skills[i].score 
			}
		}
		return (<div className={ this.renderColor(score) + "heatmap"}>{score}</div>)
	}
	renderSubskills(){
		return this.props.skill.subskills.map((subskill) => {
			return (
				<div key={this.props.skill._id._str + '-' +subskill.skill} className="row">
					<div className="col m2">{subskill.skill}</div>
					<div className="col m10">
						{this.renderSubSub(subskill, this.props.skill._id._str)}
					</div>
				</div>
			)
		})
	}
	render(){
		return (
			<Card>
			    <CardText>
			    	<h2 className="cardHead">
				    	{this.renderIcon()}
				    	{this.props.skill.skill}
				    </h2>
			    	{this.renderSubskills()}
			    </CardText>
			</Card>
		)
	}
}