import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Debris extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center"> News</h2>
        <div class="container mt-4 services-text">
          <h3 className="text-center"><Link to="/"> Back to Home </Link></h3>
        </div>
      </div>
    )
  }
}

export default Debris;