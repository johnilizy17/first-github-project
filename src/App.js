import React from 'react';
import './app.css';
import Messages from './messages/Messages';
import Account from './account/Account'
import Portfolio from './portfolio/Portfolio';
import Stock from './components/stock/Stock';
import Newsfeed from './components/newsfeed/Newsfeed'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Header from './components/header/Header';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/free Stocks">

        </Route>
        <Route path="/messages">
          <Messages/>
        </Route>
        <Route path="/account">
          <Account/>
        </Route>
        <Route path="/cash">
          
        </Route>
        <Route path="/portfolio">
          <Portfolio/>
        </Route>
        <Route path="/">
    <div className="app">
      <div className="app__header">
      <Header />
      </div>
      <div className="app__body">
              <div className="body__container">
                <Newsfeed />   
          <Stock/>      
        </div>
      </div>
          </div>
          </Route>
        </Switch>
      </Router>
  )
}

export default App;