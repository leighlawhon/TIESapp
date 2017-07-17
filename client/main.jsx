import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Switch } from 'react-router'
import createHistory from 'history/createBrowserHistory';

import App from '../imports/ui/App.jsx';
import newEmployee from '../imports/ui/newEmployee.jsx';
import Upload from '../imports/ui/Upload.jsx';
import NotFound from '../imports/ui/NotFound.jsx';

const history = createHistory()

injectTapEventPlugin();

Meteor.startup(() => {
	render((
		<Router history={history}>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/newemployee' component={newEmployee} />
				<Route path='/upload' component={Upload} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	), document.getElementById('TIESapp'));
})