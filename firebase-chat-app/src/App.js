import './App.css';
//import React, { useContext } from 'react';
//import {UserContext} from './context/UserContext';
import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Login} from '../src/components/pages/Login';
import {Chat} from '../src/components/pages/Chat';
import {Registry} from '../src/components/pages/Registry';
import {AuthProvider} from '../src/context/UserContext';
//import {styles} from '../src/styles/styles';

function App() {

	return (
		<AuthProvider>
			<BrowserRouter basename={window.location.pathname || ''}/*style={styles.body}*/>
				<Switch>
					<Route exact path="/">
						<Redirect to="/login" />
					</Route>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/chat"	component={Chat}/>
					<Route exact path="/register"	component={Registry}/>
				</Switch>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
