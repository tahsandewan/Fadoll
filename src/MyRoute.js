import React, { Component } from "react";
import { Route } from "react-router-dom";
import Whatsnew from "./home/Whatsnew";
import Men from "./home/Men";
import Women from "./home/Women";
import Kids from "./home/Kids";
import Wedding from "./home/Wedding";
import Home from "./home/Home";
import Details from "./home/Details";

class MyRoute extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Whatsnew" component={Whatsnew}></Route>
        <Route exact path="/Men" component={Men}></Route>
        <Route exact path="/Women" component={Women}></Route>
        <Route exact path="/Kids" component={Kids}></Route>
        <Route exact path="/Wedding" component={Wedding}></Route>
        <Route exact path="/Details" component={Details}></Route>
      </div>
    );
  }
}

export default MyRoute;
