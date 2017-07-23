import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Sidemenu from './Sidemenu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
	fontFamily: 'Open Sans',
	palette: {
		primary1Color: red700,
	},
  	appBar: {
    	height: 50,
  	},
});
export default class Next extends Component{
	render(){
		return (
			<MuiThemeProvider muiTheme={muiTheme}> 
				<div>
					<Sidemenu />
					<div  className="container">
				<h1>{"What's Next"}</h1>
				<ul className="intro">
					<li>{'• Integrate with existing HR platforms like Work Day'}</li>
					<li>{'• Expand Business Intelligence features'}</li>
				</ul>
			</div></div>

			</MuiThemeProvider>
		)
	}
}