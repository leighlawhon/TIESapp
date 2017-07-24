import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
export default class Sidemenu extends Component{
	constructor(props){
    	super(props);
    	this.state = {open:false};
    	this.handleToggle = this.handleToggle.bind(this)
    	this.handleClose = this.handleClose.bind(this)
 
  	}
  	handleToggle() {
    	this.setState({open: !this.state.open});
   	}
  	handleClose() { this.setState({open: false}); }
    render() {
        return (
            <div>
            <Drawer
          		docked={false}
          		open={this.state.open}
          		onRequestChange={(open) => this.setState({open})}>
          		<MenuItem onTouchTap={() => {this.handleClose()}} >
	          		<NavLink to="/">Home </NavLink>
          		</MenuItem>
          		<MenuItem onTouchTap={() => {this.handleClose() }} >
	          		<NavLink to="/ods"> Open Divesity Standards (ODS)) </NavLink>
	          	</MenuItem>
              	
              	<MenuItem onTouchTap={this.handleClose}>

              	<NavLink to="/teambuilding">Skill Stack</NavLink>

              	</MenuItem>
                <MenuItem onTouchTap={this.handleClose}>
                  <NavLink to="/opportunities">Opportunities</NavLink>
                </MenuItem>
                <MenuItem onTouchTap={this.handleClose}>
                  <NavLink to="/next">Next</NavLink>
                </MenuItem>
            </Drawer>

            <AppBar title="TeamMatrix.io" className="brand" onLeftIconButtonTouchTap={this.handleToggle} />
            </div>
        );
    }
}
