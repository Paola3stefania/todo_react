import React, { Component } from "react";

import { NavLink } from "react-router-dom";

// has anchor links for displaying dif pages or views

// eslint-disable-next-line react/prefer-stateless-function
export default class FooterNav extends Component {
  render() {
    return (
      <div className="footer-nav">
        <ul className="d-flex list-unstyled">
          <li className="footer-nav__page-link btn btn-warning">
            <NavLink className="footer-link" to="/">
              All
            </NavLink>
          </li>
          <li className="footer-nav__page-link btn btn-warning">
            <NavLink className="footer-link" to="/active">
              Active
            </NavLink>
          </li>
          <li className="footer-nav__page-link btn btn-warning">
            <NavLink className="footer-link" to="/completed">
              Completed
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
