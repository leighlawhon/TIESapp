import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Switch, PropsRoute } from 'react-router'
import createHistory from 'history/createBrowserHistory';

import App from '../imports/ui/App.jsx';
import newEmployee from '../imports/ui/newEmployee.jsx';
import Upload from '../imports/ui/Upload.jsx';
import ODS from '../imports/ui/ODS.jsx';
import TeamList from '../imports/ui/Team-list.jsx';
import Openings from '../imports/ui/Openings.jsx';
import NotFound from '../imports/ui/NotFound.jsx';

const history = createHistory()

injectTapEventPlugin();

Meteor.startup(() => {
	render((
		<Router history={history}>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/ods' component={ODS} />
				<Route path='/openings' component={Openings} />
				<Route path='/newemployee' component={newEmployee} />
				<Route path='/teams' component={TeamList} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	), document.getElementById('TIESapp'));
})
