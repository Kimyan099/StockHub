import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Stocks from './components/Stocks'
import {StockData} from './components/StockContext'
import Home from './components/pages/HomePage/Home'
import CompanyFinder from './components/companies/Companies';
import {CompanyProvider} from './components/companies/GetCompanies'
import DetailsPage from './components/companies/DetailsPage';

function App() {
	const [companyName, setCompanyName] = useState("");

	const changeCompanyName = (name) => {
		setCompanyName(name)
	}

  return (
    <Router>
			<div id='body'>
				{/* <NavBar /> */}
        <NavBar />
				<Switch>
					<CompanyProvider>
						<Route path="/companies" render={(props) => <CompanyFinder changeCompanyName={changeCompanyName}/>}>
						</Route>
					</CompanyProvider>
					<Route path='/' exact></Route>
					<Route path="/companies" exact></Route>
					<Route path="/market-news" exact ></Route>

          			<Route path="/profile" exact ></Route>
				</Switch>
				<StockData>
					<Route path="/stocks"  component={Stocks}></Route>
					</StockData>
				<Route path="/" exact component={Home} ></Route>
				<Route path="/details/:symbol" 
        			render={(props) => (
          		<DetailsPage {...props} name={companyName} />
        )}/>
			</div>
		</Router>
  );
}

export default App;
