import React, { Component } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import img01 from "../images/img_01.png";
import img02 from "../images/img_02.jpg";
import img03 from "../images/img_03.jpg";
import SideExample from "./SideExample";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  MagnifierContainer,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      loading: true,
      products: [],
      cart: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const element_id = event.target.id;
    this.setState({ id: element_id }, () => console.log(this.state.id));

    //console.log(this.state.id);
  }
  // state = {
  //   loading: true,
  //   products: [],
  //   cart: [],
  //   id: 1,
  // };
  componentDidMount() {
    const passed_id = this.props.location.state.element_id;

    this.setState({ cart: JSON.parse(localStorage.getItem("cart")) || [] });
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jahidweb7.herokuapp.com/products/" +
          passed_id
      )
      .then((res) => {
        this.setState({ products: res.data, loading: false });
      });

    this.setState({ id: passed_id });
    console.log(passed_id);
  }
  // componentDidMount() {
  //   const data = this.props.location.state.element_id;
  //   this.setState({ id: data });
  //   // console.log(data);
  // }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     id: 1
  //   };

  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(event) {
  //   const element_id = event.target.id;
  //   this.setState({ id: element_id }, () => console.log(this.state.id));

  //   //console.log(this.state.id);
  // }
  render() {
    return (
      <div>
        {/* <h1>image:{this.state.products.ProductPrice}</h1> */}
        <div className="left">
          <p>{this.state.products.ProductImage}</p>
          <div>
            {this.state.id == 1 ? <SideExample img={img01} /> : null}

            {this.state.id == 2 ? <SideExample img={img02} /> : null}

            {this.state.id == 3 ? <SideExample img={img03} /> : null}

            <img
              id={1}
              onClick={this.handleClick}
              src={img01}
              height="100"
              width="70"
              alt="Image 01"
            />
            <img
              id={2}
              onClick={this.handleClick}
              src={img02}
              height="100"
              width="70"
              alt="Image 01"
            />
            <img
              id={3}
              onClick={this.handleClick}
              src={img03}
              height="100"
              width="70"
              alt="Image 01"
            />
          </div>
        </div>
        <div className="right">
          <h1>{this.state.products.ProductName}</h1>
          <div className="tabname">
            <Tabs>
              <TabList>
                <Tab>ITEM DESCRIPTION</Tab>
                <Tab>PRODUCT INFORMATION</Tab>
                <Tab> RETURN & EXCHANGE</Tab>
              </TabList>

              <TabPanel>
                <p>{this.state.products.description}</p>
              </TabPanel>
              <TabPanel>
                <p>{this.state.products.caption}</p>
              </TabPanel>
              <TabPanel>
                <p>{this.state.products.ModifiedBy}</p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
