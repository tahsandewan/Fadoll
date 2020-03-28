import React, { Component } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import Bar from "./Bar.css";

class AppBar extends Component {
  render() {
    return (
      <div class="topnavv">
        <div>
          <a href="">
            <Link to="/">fadoll</Link>
          </a>
        </div>

        <input type="text" name="search" placeholder="Search.."></input>
        <div className="name" style={{ float: "right", marginTop: 5 }}>
          <a style={{ fontSize: 18 }} class="" href="#home">
            Login
          </a>
          <a href="#">
            <ShoppingCartIcon color="primary"></ShoppingCartIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default AppBar;
