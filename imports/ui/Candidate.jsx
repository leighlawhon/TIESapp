import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from  'material-ui/Avatar';
import Chip from 'material-ui/chip';
import { red700, blue900 } from 'material-ui/styles/colors';

export default class Candidate extends Component{
	render(){
		return (
			<Card>
			    <CardHeader
			      title="URL Avatar"
			      subtitle="Subtitle"
			      avatar="images/jsa-128.jpg"
			    />
			    <CardMedia
			      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
			    >
			      <img src="images/nature-600-337.jpg" alt="" />
			    </CardMedia>
			    <CardText>
			      <Chip
			      	backgroundColor={red700}
			      >
			      	<Avatar size={32} color={red700} backgroundColor={blue900}>2</Avatar>
			      Ball manipulation
			      </Chip>
			    </CardText>
			    <CardActions>
			      
			    </CardActions>
			</Card>
		)
	}
}