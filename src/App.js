import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Main";
import MyRoute from "./MyRoute";
import { BrowserRouter } from "react-router-dom";
import Main from "./home/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "reactstrap";
import Details from "./home/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main></Main>
        <MyRoute></MyRoute>
        {/* <Details></Details> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
