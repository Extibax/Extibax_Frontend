/* Modules */
import React, { Component } from "react";
import { Link } from "react-router-dom";

/* Styled */
import { HomeStyles } from "../Home/index.styles";

class Home extends Component {
  render() {
    return (
      <HomeStyles>
        <div className="home_container">
          <center>
            <h1>Extibax Home</h1>

            <div className="links_container">
              <Link to="/Portfolio">Portfolio</Link>
            </div>
          </center>
        </div>
      </HomeStyles>
    );
  }
}

export default Home;
