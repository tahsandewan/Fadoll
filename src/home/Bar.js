import React, { Component } from "react";
import styles from "./Bar.css";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

class Bar extends Component {
  render() {
    return (
      <div>
        <ul class="topnav">
          <li>
            <a href="">
              <Link to="/">
                <HomeIcon color="primary"></HomeIcon>
              </Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/Whatsnew">What's New</Link>{" "}
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/Men">Men</Link>{" "}
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/Women">Women</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/Kids">Kids</Link>
            </a>
          </li>
          <li>
            <a href="">
              <Link to="/Wedding">Wedding</Link>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Bar;
