import React, { Component } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class Details extends Component {
  state = {
    loading: true,
    products: [],
    cart: [],
    id: null
  };
  componentDidMount() {
    const passed_id = this.props.location.state.element_id;

    this.setState({ cart: JSON.parse(localStorage.getItem("cart")) || [] });
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jahidweb7.herokuapp.com/products/" +
          passed_id
      )
      .then(res => {
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
  render() {
    return (
      <div>
        {/* <h1>image:{this.state.products.ProductPrice}</h1> */}
        <div className="left">
          <p>{this.state.products.ProductImage}</p>
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
