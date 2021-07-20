import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import * as userAction from '../Redux/Actions/index';

import Home from './Home';
import Header from './Header';
import Survey from './Survey';
import SurveyNew from './SurveyNew';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

class App extends React.Component {

	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className='container'>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/survey' component={Survey} />
						<Route exact path='/surveynew' component={SurveyNew} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}



export default connect(null, userAction)(App);
