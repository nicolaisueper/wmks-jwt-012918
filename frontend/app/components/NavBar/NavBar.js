import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.scss';

export const NavBar = (props) => {
  return (
    <div className="nav">
      <div id="nav-left">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/protected">Protected</NavLink>
      </div>
      <div id="nav-right">
        {
          props.token
            ? <a onClick={() => {
              props.logout();
              props.history.push('/');
            }}>Log out</a>
            : <NavLink to="/login">Log in</NavLink>
        }
      </div>
    </div>
  );
};
