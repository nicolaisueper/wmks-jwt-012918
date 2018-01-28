import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import jwt from 'jsonwebtoken';
import Home from "./Home";
import Login from "./Login";
import Protected from "./Protected";
import NavBar from "./components/NavBar";

import './App.scss';

const ProtectedRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    rest['token'] && jwt.decode(rest['token'])
      ? (<Component {...props}/>)
      : (<Redirect to={{
        pathname: '/login',
        state: {
          from: rest['path'],
          accessViolation: true
        }
      }}/>)
  )}/>
);

class App extends React.Component {
  render = () => {
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar/>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <ProtectedRoute path="/protected" component={Protected} token={this.props.token}/>
              <Redirect from="/" to="/home"/>
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    )
  };
}

export default connect(state => state)(App);
