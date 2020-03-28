import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel";
import "../css/owl.carousel.css";
import "../css/owl.theme.default.css";
import img1 from "../images/islamic1.jpg";
import img2 from "../images/islamic2.jpg";
import img3 from "../images/islamic3.jpg";

class Sample extends Component {
  render() {
    return (
      <div>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          autoplay={true}
          autoplayTimeout={2000}
          items={1}
        >
          <div class="item">
            <img src={img1}></img>
          </div>
          <div class="item">
          <img src={img2}></img>
          </div>
          <div class="item">
          <img src={img3}></img>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Sample;
