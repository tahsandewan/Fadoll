import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
  Badge
} from "reactstrap";
import axios from "axios";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Footer from "./Footer";
class Kids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [],
      page: 1,
      cart: [],
      id: -1
    };

    this.handleClick = this.handleClick.bind(this);
  }

  updateId(data) {
    this.setState({ data });
  }

  componentDidMount() {
    this.setState({ cart: JSON.parse(localStorage.getItem("cart")) || [] });

    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://jahidweb7.herokuapp.com/products/"
      )
      .then(res => {
        this.setState({ products: res.data, loading: false });
      });
  }

  handleClick(event) {
    const element_id = event.target.id;
    console.log(element_id);
  }

  componentDidUpdate() {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  }

  addToCart = product => {
    // {
    //     product,
    //     quantity
    // }

    // 1. copy the cart array
    let cart = this.state.cart;
    let productExists = false;

    // 2. check if the product already in the cart array
    productExists = cart.filter(item => item.product.id === product.id).length;
    // 3. jodi cart array te thake tahole amra just quantity increment korbo
    if (!productExists) {
      cart.push({ product, quantity: 1 });
    }
    // 4. otherwise amra prodeuct add korbo and quantity: 1

    this.setState({ cart: cart });
  };

  addition = product => {
    // {
    //     product,
    //     quantity
    // }

    // 1. copy the cart array
    let cart = this.state.cart;
    let productExists = false;

    // 2. check if the product already in the cart array
    // productExists = cart.filter(item => item.product.id === product.id).length;
    // // 3. jodi cart array te thake tahole amra just quantity increment korbo
    // if (productExists) {
    let productIndex = cart.findIndex(item => item.product.id === product.id);
    cart[productIndex].quantity++;
    // }
    // 4. otherwise amra prodeuct add korbo and quantity: 1
    // else {
    //   cart.push({ product, quantity: 1 });
    // }

    this.setState({ cart: cart });
  };

  subtraction = product => {
    // 1. copy the cart array
    let cart = this.state.cart;
    let productExists = false;

    // 2. check if the product already in the cart array
    productExists = cart.filter(item => item.product.id === product.id).length;
    // 3. jodi cart array te thake tahole amra just quantity increment korbo

    let productIndex = cart.findIndex(item => item.product.id === product.id);
    cart[productIndex].quantity--;

    this.setState({ cart: cart });
  };

  removeFromCart = id => {
    let cart = this.state.cart;
    let updatedCart = cart.filter(item => item.product.id !== id);
    this.setState({ cart: updatedCart });
  };

  render() {
    let productCount = this.state.products.length;
    let PerPage = 9;
    let pages = Math.ceil(productCount / PerPage);
    let skip = (this.state.page - 1) * PerPage;
    let itemproduct = 1;

    return (
      <div>
        <Container>
          {this.state.loading ? <h1>Loading....</h1> : null}
          <Row>
            <Col md="8">
              <Row>
                {this.state.products
                  .slice(skip, PerPage + skip)
                  .map(product => (
                    <Col md="4" key={product.id}>
                      <Card className="mb-3">
                        <CardImg
                          top
                          width="100%"
                          src={product.ProductImage}
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardTitle>{product.ProductName}</CardTitle>
                          <del>৳ {product.SalePrice}</del>
                          <CardText>
                            <b>Price: </b> ৳ {product.ProductPrice}
                          </CardText>
                          <Button
                            style={{ width: "110px" }}
                            onClick={() => this.addToCart(product)}
                          >
                            Add to cart
                          </Button>

                          <Link
                            to={{
                              pathname: "/Details",
                              state: {
                                element_id: product.id
                              }
                            }}
                          >
                            View
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                <Col>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li
                        class={`page-item ${this.state.page == 1 &&
                          "disabled"}`}
                      >
                        <a
                          class="page-link"
                          href="#"
                          onClick={() =>
                            this.setState({ page: this.state.page - 1 })
                          }
                        >
                          Previous
                        </a>
                      </li>
                      {Array.from({ length: pages }).map((_, i) => (
                        <li
                          class={`page-item ${
                            this.state.page == i + 1 ? "active" : ""
                          }`}
                        >
                          <a
                            class="page-link"
                            href="#"
                            onClick={() => this.setState({ page: i })}
                          >
                            {++i}
                          </a>
                        </li>
                      ))}
                      <li
                        class={`page-item ${this.state.page == pages &&
                          "disabled"}`}
                      >
                        <a
                          class="page-link"
                          href="#"
                          onClick={() =>
                            this.setState({ page: this.state.page + 1 })
                          }
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </Col>
              </Row>
            </Col>
            <Col md="4">
              <h2>Cart</h2>
              <ListGroup>
                {this.state.cart.map(cart => (
                  <ListGroupItem className="dflex align-items-center d-flex">
                    ({cart.product.name})
                    {cart.quantity > 1 && (
                      <Button
                        close
                        aria-label="Cancel"
                        id={cart.quantity}
                        style={{ width: "30px", color: "red" }}
                        color="secondary"
                        onClick={() => this.subtraction(cart.product)}
                      >
                        <span aria-hidden>&ndash;</span>
                      </Button>
                    )}
                    {cart.quantity <= 1 && (
                      <Button
                        close
                        aria-label="Cancel"
                        className="not-allowed"
                        id={cart.quantity}
                        style={{ width: "30px", color: "red" }}
                        color="secondary"
                        onClick={() => this.subtraction(cart.product)}
                        disabled
                      >
                        <span aria-hidden>&ndash;</span>
                      </Button>
                    )}
                    {cart.quantity}
                    {cart.quantity < 5 && (
                      <Button
                        close
                        aria-label="Cancel"
                        style={{ width: "30px", color: "red" }}
                        onClick={() => this.addition(cart.product)}
                      >
                        <span aria-hidden>+</span>
                      </Button>
                    )}
                    {cart.quantity >= 5 && (
                      <Button
                        close
                        aria-label="Cancel"
                        className="not-allowed"
                        style={{ width: "30px", color: "red" }}
                        onClick={() => this.addition(cart.product)}
                        disabled
                      >
                        <span aria-hidden>+</span>
                      </Button>
                    )}
                    Price: {cart.product.price * cart.quantity}
                    <Button
                      className="ml-auto"
                      color="danger"
                      style={{ width: "50px" }}
                      onClick={() => this.removeFromCart(cart.product.id)}
                    >
                      &times;
                    </Button>
                  </ListGroupItem>
                ))}
              </ListGroup>
              <b>Total Price: </b>{" "}
              {this.state.cart
                .reduce(
                  (total, item) =>
                    (total += item.product.price * item.quantity),
                  0
                )
                .toFixed(2)}
            </Col>
          </Row>
        </Container>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default Kids;
