import React from "react";
import "./Navbar.css";
import AppHeader from "../AppHeader/Index";
import AppFooter from "../AppFooter/Index";
import { Link } from "react-router-dom";
import { Menu } from "antd";
function Navbar() {
  return (
    <div>
      <div className="navbar">
        {" "}
        <div className="Home-App">
          <AppHeader />
          <div className="sidebar">
            <Menu>

            <p><Link to={"/dashbaor"}>Home</Link></p> 
            <p><Link to={"/Comment"}>Tolov</Link></p> 
            <p><Link to={"/Darslar"}>Darslar</Link> </p>
            <p><Link to={"/About"}>Fanlar</Link> </p>
            </Menu>
          </div>

          {/* <AppFooter /> */}
        </div>
        {/* <h2>{props.name ? `Welcome to our study center - ${props.name}` : "Login please"}</h2> */}
      </div>
    </div>
  );
}

export default Navbar;
