import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StockData } from './components/pages/Stocks/StockContext';
import { CompanyProvider } from './components/pages/companies/GetCompanies';
import Home from './components/pages/HomePage/Home';
import NavBar from './components/ui/NavBar';
import Stocks from './components/pages/Stocks/Stocks';
import CompanyFinder from './components/pages/companies/Companies';
import Footer from './components/pages/Footer/Footer';
import DetailsPage from './components/pages/companies/DetailsPage';
import ListNews from './components/pages/MarketNews/ListNews';
import { NewsCollection } from './components/pages/MarketNews/NewsContext';
import NewsDetailed from './components/pages/MarketNews/NewsDetailed';
import Temp from './components/pages/temp/Temp';
import LoginPage from './components/pages/ProfilePage/Register/LoginPage'
import RegisterPage from './components/pages/ProfilePage/Register/RegisterPage'
import {CurrentUser} from "./components/pages/ProfilePage/Register/UserContext"
import ProfilePage from './components/pages/ProfilePage/NewProfilePage/ProfiePage';
import ProfileDetails from "./components/pages/ProfilePage/NewProfilePage/ProfileDetails/ProfilePageDetails"
import ProfilePageTrade from "./components/pages/ProfilePage/NewProfilePage/ProfileTrade/ProfilePageTrade"

function App() {
  const [companyName, setCompanyName] = useState('');
  const changeCompanyName = (name) => {
    setCompanyName(name);
  };
  const [loggedInUser, setLoggedInUser] = useState("Guest");

  const changeLonggedInUser = (userName) => {
    setLoggedInUser(userName);
  }


  return (
    <Router>
      <CurrentUser>
      <div>
        <NavBar userName={loggedInUser}/>
        <Switch>
          <CompanyProvider>
            <Route
              path='/companies'
              render={(props) => (
                <CompanyFinder changeCompanyName={changeCompanyName} />
              )}
            ></Route>
			 <StockData>
          <Route path='/stocks' component={Stocks}></Route>
        </StockData>
          </CompanyProvider>
          <Route path='/' exact></Route>
          <Route path='/companies' exact></Route>
          <Route path='/market-news' exact></Route>
        </Switch>
   
        <Route path='/' exact component={Home}></Route>
        <Route
          path='/details/:symbol'
          render={(props) => <DetailsPage {...props} name={companyName} />}
        />
        <NewsCollection>
          <Route exact path='/market-news' component={ListNews} />
          <Route exact path='/market-news/:newsId' component={NewsDetailed} />
        </NewsCollection>
        <Route exact path='/temp' component={Temp} />
        <Route exact path='/login' component={LoginPage} /*changeLonggedInUser={changeLonggedInUser()}*//>
        <Route exact path='/register' component={RegisterPage}/>
        <Route path='/newProfile'> <ProfilePage/> </Route>
        <Route path="/newProfile/profileDetails" component={ProfileDetails}/>
        <Route path="/newProfile/favourites" />
       <StockData>
            <Route path="/newProfile/trade" component={ProfilePageTrade} />
       </StockData>
        

      </div>
      </CurrentUser>
      <Footer />
    </Router>
  );
}

export default App;
