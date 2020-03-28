import React, { Component } from "react";
import Top from "../Top";
import AppBar from "./AppBar";
import Bar from "./Bar";

class Main extends Component {
  render() {
    return (
      <div>
        <Top></Top>
        <AppBar></AppBar>
        <Bar></Bar>
      </div>
    );
  }
}

export default Main;
