import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red700} from 'material-ui/styles/colors';

import Divider from 'material-ui/Divider';
import CompanyStats from './Company-stats';
import Home from './Home';
import Sidemenu from './Sidemenu';

 
import { Companies } from '../api/companies.js';
const muiTheme = getMuiTheme({
	fontFamily: 'Open Sans',
	palette: {
		primary1Color: red700,
	},
  	appBar: {
    	height: 50,
  	},
});
export default class App extends Component{
	constructor(props) {
		super(props);

		// this.state = {
		// 	employees: []
		// }
	}
	// componentWillMount() {
	// 	this.setState({
	// 		employees: [
	// 			{
	// 				_id: 0,
	// 				first_name: "leigh",
	// 				last_name: "lawhon",
	// 				skills: []
	// 			}
	// 		]
	// 	})
	// }
	
	// ToDO: figure out how to nest routing...it has changed
	render(){
		return (
			<MuiThemeProvider muiTheme={muiTheme}> 
				<div>
					<Sidemenu />
					<div className="container">
						<div className="row">
							<Home/>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

