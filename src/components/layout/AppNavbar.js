import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">

        <Link to="/" className="navbar-brand m-auto" id="navbar-name">
          Ruben Rios
        </Link>

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
                <Link to="/news" className="nav-link">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
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
