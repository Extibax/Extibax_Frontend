/* Modules */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home_container">
        <center>
          <h1>Extibax Home</h1>

          <div className="links_container">
            <Link to="/Portfolio">Portfolio</Link>
          </div>
        </center>
      </div>
    );
  }
}

export default Home;
