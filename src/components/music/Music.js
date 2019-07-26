import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Music extends Component {
  render() {
    return (
      <div>
        <div class="container mt-4 services-text">
          <h3 className="text-center"><Link to="/"> Back to Home </Link></h3>
        </div>
        <h2 className="text-center"> Music</h2>
      </div>
    )
  }
}

export default Music;
