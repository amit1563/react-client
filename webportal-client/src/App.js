import React, { Component } from 'react';
import Header from './components/common/Header';
import Landing from './components/common/Landing';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './components/user/Signup';
import store from './store'
import {Provider} from 'react-redux';
import Login from './components/user/Login';
import jwt_decode from 'jwt-decode'
import setJWTToken from './securityUtil/setJWTToken'
import { logout } from "./actions/userActions";
import {SET_CURRENT_USER} from './actions/types'
import Dashboard from './components/Dashboard';
import SecureRoute from './securityUtil/SecureRoute'


const token = localStorage.jwtToken;
   if(token){
     setJWTToken(token);
     const decoded_jwtToken = jwt_decode(token);
     store.dispatch({
       type : SET_CURRENT_USER,
       payload :decoded_jwtToken
     })

   const currentTime = Date.now()/1000;

   if(decoded_jwtToken.exp<currentTime){
   store.dispatch(logout());
  window.location.href = "/";
   }
  }

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
      <div className="App">
        <Header/>
        {
          //start of unsecure route
        }
        {
          //<Route exact path = "/login" component = {Login}/>

        }
          <Route exact path = "/" component = {Landing}/>
          <Route exact path = "/signUp" component = {Signup}/>
          <Route exact path = "/login" component = {Login}/>
        {
          //start of secure routing
        }
        <Switch>
             <SecureRoute exact path = "/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  </Provider>
    );
  }
}

export default App;
