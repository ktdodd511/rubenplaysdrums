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

            <ul className="navbar-nav m-auto">
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
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item ml-3 mr-3">
                <Link to="/" className="nav-link" id="navbar-name">
                  Ruben Rios
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/video" className="nav-link">
                  Video
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/music" className="nav-link">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/schedule" className="nav-link">
                  Schedule
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
