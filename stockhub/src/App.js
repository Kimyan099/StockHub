import React from 'react';
import './App.css';
import NavBar from './components/ui/navbar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
			<div id='body'>
				<NavBar />
				<Switch>
					<Route path="/companies" exact></Route>
					<Route path="/market-news" exact ></Route>
					<Route path="/stocks" exact></Route>
          <Route path="/profile" exact ></Route>
				</Switch>
			</div>
		</Router>
  );
}

export default App;
