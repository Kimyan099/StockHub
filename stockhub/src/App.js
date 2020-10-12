import React from 'react';
import './App.css';
import NavBar from './components/ui/navbar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Stocks from './components/Stocks'
import {StockData} from './components/StockContext'

function App() {
  return (
    <Router>
			<div id='body'>
				<NavBar />
				<Switch>
					<Route path="/companies" exact></Route>
					<Route path="/market-news" exact ></Route>
					<StockData>
					<Route path="/stocks" exact component={Stocks}></Route>
					</StockData>
          			<Route path="/profile" exact ></Route>
				</Switch>
			</div>
		</Router>
  );
}

export default App;
