import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


import Newsitem from './components/Newsitem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
 c='john';
  render() {
    return (
      <div>
           <Router>
        <Navbar/> 
    
        <Switch>
          <Route exact path="/"> <News key="general" pagesize = {5} country="in" category="general"/></Route>
          <Route exact path="/bussiness"> <News key="bussiness" pagesize = {5} country="in" category="bussiness"/></Route>
          <Route exact path="/entertainment"> <News key="entertainment" pagesize = {5} country="in" category="entertainment"/></Route>
          <Route exact path="/sports"> <News key="sports" pagesize = {5} country="in" category="sports"/></Route>
          <Route exact path="/science"> <News key="science" pagesize = {5} country="in" category="science"/></Route>
          <Route exact path="/technology"> <News key="technology" pagesize = {5} country="in" category="technology"/></Route>
          <Route exact path="/health"> <News key="health" pagesize = {5} country="in" category="health"/></Route>
         

        
        </Switch>
        </Router>
       

          {/* hello my first class based com is here */}
      </div>
    )
  }
}

