import React from 'react';
import './App.css';
import NavBar from './components/ui/navbar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanyFinder from './components/companies/Companies';
import {CompanyProvider} from './components/companies/GetCompanies'

function App() {
  return (
    <Router>
			<div id='body'>
				<NavBar />
				<Switch>
					<CompanyProvider>
						<Route path="/companies" render={(props) => <CompanyFinder />}>
						</Route>
					</CompanyProvider>
					<Route path="/market-news" exact ></Route>
					<Route path="/stocks" exact></Route>
          			<Route path="/profile" exact ></Route>
				</Switch>
			</div>
		</Router>
  );
}

export default App;
