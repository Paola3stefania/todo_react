import React, { Component } from "react";

import { NavLink } from "react-router-dom";

// has anchor links for displaying dif pages or views

// eslint-disable-next-line react/prefer-stateless-function
export default class FooterNav extends Component {
  render() {
    return (
      <div className="footer-nav">
        <p>Im the footer Nav</p>
        <ul>
          <li>
            <NavLink to="/">All</NavLink>
          </li>
          <li>
            <NavLink to="/active">Active</NavLink>
          </li>
          <li>
            <NavLink to="/completed">Completed</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
