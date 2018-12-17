import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import UserList from './components/UserList';
import User from './components/User';
import { createBrowserHistory } from "history";

const Protected = () => <p>PROTECT</p>

const ProtectedRoute = ({ component: Component, ...props}) => {
  return props.isAuthenticated ? <Component {...props}/> : <Redirect to="/login"/>
};

const Main = (props) => {
  return (
    <Switch>
      <Route path="/login" render={() => <Login login={props.login}/>}/>
      <Route path="/" component={UserList} exact {...props}/>}/>
      <ProtectedRoute path="/posts" component={Protected} {...props} exact/>
      <ProtectedRoute path="/comments" component={Protected} {...props} exact/>
      <ProtectedRoute path="/user/:id" component={User} {...props} exact/>
    </Switch>
  )
};

const RouterApp = ({ logout, login, isAuthenticated }) => {
  return (
    <div>
        <Header logout={logout}/>
        <Main login={login}  isAuthenticated={isAuthenticated}/>
    </div>
  )
}

class App extends Component {
  state = {
      isAuthenticated: false,
  };

  login = () => {
    this.setState({ isAuthenticated: true });
  };

  logout = () => {
    this.setState({ isAuthenticated: false });
  }

  render() {
    
    return (
      <BrowserRouter>
        <RouterApp login={this.login} logout={this.logout} {...this.state}/>
      </BrowserRouter>
      
    );
  }
}

export default App;
