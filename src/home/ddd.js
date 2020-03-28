import React, { Component } from "react";
import axios from "axios";

class Details extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    const data = this.props.location.state.element_id;

    this.setState({ cart: JSON.parse(localStorage.getItem("cart")) || [] });
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jahidweb7.herokuapp.com/products/" +
          data
      )
      .then(res => {
        this.setState({ products: res.data, loading: false });
      });

    this.setState({ id: data });
    console.log(data);
  }
  // componentDidMount() {
  //   this.setState({ cart: JSON.parse(localStorage.getItem("cart")) || [] });
  //   const data = this.props.location.state.element_id;
  //   this.setState({ id: data });

  //   axios
  //     .get(
  //       "https://cors-anywhere.herokuapp.com/https://jahidweb7.herokuapp.com/products/" +
  //         id
  //     )

  //     .then(res => {
  //       this.setState({ products: res.data, loading: false });
  //     });

  //   console.log(data);
  // }

  // componentDidMount() {
  //   const data = this.props.location.state.element_id;
  //   this.setState({ id: data });

  //   // console.log(data);
  // }
  render() {
    return (
      <div>
        <h1>{this.state.id}</h1>
      </div>
    );
  }
}

export default Details;
