import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default AppNavbar;
