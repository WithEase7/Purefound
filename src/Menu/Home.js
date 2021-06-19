import React from "react";
import {Link} from 'react-router-dom'
import "./Home.css";
import logo from "../images/logo/logo.png";
function Home() {

  return (
    <div className="home-div">
      <div className="purefound">
        <div className="logo-div">
          <img src={logo} className="logo-img"/>
        </div>
        <div className="home-message">
          <h2>Lets you eat food better.</h2>
        </div>
        <div className="sign-log">
        <div>
          <Link className="login-div" to = "/login">Login</Link>
        </div>
        <div >
          <Link className="sign-div" to="/sign">Register</Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
