import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdvancedNavBar from './components/NavBar';
import ListNews from './components/MarketNews/ListNews';
import { NewsCollection } from './components/MarketNews/NewsContext';
import NewsDetailed from './components/MarketNews/NewsDetailed';

function App() {
  return (
    <Router>
      <div id='body'>
        {/* <NavBar /> */}
        <AdvancedNavBar />
        <Switch>
          <Route path='/' exact></Route>
          <Route path='/companies' exact></Route>
          <NewsCollection>
            <Route exact path='/market-news' render={() => <ListNews />} />
            <Route exact path='/market-news/:newsId' component={NewsDetailed} />
          </NewsCollection>
          <Route path='/stocks' exact></Route>
          <Route path='/profile' exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
