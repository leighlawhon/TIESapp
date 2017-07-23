import React, { Component } from 'react';
import Sidemenu from './Sidemenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const muiTheme = getMuiTheme({
	fontFamily: 'Open Sans',
	palette: {
		primary1Color: red700,
	},
  	appBar: {
    	height: 50,
  	},
});
export default class Upload extends Component{
	render(){
		return (
			<MuiThemeProvider muiTheme={muiTheme}> 
				<div>
					<Sidemenu />
					<div className="container">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous"/>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
					<h1>Open Diversity Standards</h1>
				    <div id="TIESapp" className="container">
    <Divider />
    <h2>Software Development Engineer</h2>

    <h3>Job Description:</h3>
    <p>
      Working in conjunction with account managers, operations, designers and customers, you will leverage a breadth of technologies including object oriented design and coding, databases, mobile devices, tablets, Kindle, streaming video technologies and Amazon
      Web Services. We are looking for developers who will challenge themselves and others to constantly come up with innovative solutions and who not only knows how to solve the problem, but who helps define the problems and direction and creates value
      while pioneering new frontiers. This is an exciting, dynamic, and challenging position and we are looking for people with initiative, drive and relevant experience in the industry. This role will require you to work directly with product, design
      and operations teams to define and implement solutions.
    </p>
    <h3>Skill Standards: </h3>
    <p>
      Candidates will be reviewed based on skills that they be actually be using during the course of their work day
      </p>
    <div className="table-responsive">
      <table className="table table-striped">
      	<thead>
        <tr>
          <th>Qualification</th>
          <th>How we evaluate</th>
          <th>Who is evaluating</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Database</td>
          <td>5 multiple choice questions</td>
          <td>Jim Henson</td>
        </tr>
        <tr>
          <td>Java Programming Language</td>
          <td>10 multiple choice questions</td>
          <td>Diana Ross</td>
        </tr>
        <tr>
          <td>Algorithms</td>
          <td>A small project invovling solving a problem</td>
          <td>Jim Henson</td>
        </tr>
        <tr>
          <td>Leadership and Mentoring</td>
          <td>All candidates will be:
            <ul>
              <li>Participte in a structured Interview</li>
              <li>Be asked the same standards questions</li>
            </ul>
          </td>
          <td>Jim Henson</td>
        </tr>
        </tbody>
      </table>
  </div>
        </div>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}
