import React, { Component } from "react";
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
  Badge,
  Pagination
} from "reactstrap";

class Pagenumber extends Component {
  state = {
    loading: true,
    products: [],
    page: 1,
    cart: []
  };
  render() {
    let productCount = this.state.products.length;
    let PerPage = 9;
    let pages = Math.ceil(productCount / PerPage);
    let skip = (this.state.page - 1) * PerPage;
    return (
      <div>
        <Col>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class={`page-item ${this.state.page == 1 && "disabled"}`}>
                <a
                  class="page-link"
                  href="#"
                  onClick={() => this.setState({ page: this.state.page - 1 })}
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
              <li class={`page-item ${this.state.page == pages && "disabled"}`}>
                <a
                  class="page-link"
                  href="#"
                  onClick={() => this.setState({ page: this.state.page + 1 })}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </Col>
      </div>
    );
  }
}

export default Pagenumber;
