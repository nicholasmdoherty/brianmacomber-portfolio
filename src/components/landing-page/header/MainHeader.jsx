import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";
import "../landing-page.css";
import BRIAN_TPOSE_IMAGE from "../../../img/brian-header-tpose.jpg";

/**
 *  This class is representing the main header of the landing page. It will hold a p5.js sketch
 *  within a p5 wrapper. The p5 sketch is going to be the FOLIE branding background with the FOLIE
 *  text bouncing like a TV screensaver
 */
export default class MainHeader extends Component {
  render() {
    return (
      <div>
        <Carousel id="carousel-header" className="drop-shadow" interval={75000}>
          <Carousel.Item>
            <div
              className="d-block w-100 h-100 carousel-image"
              style={{
                backgroundImage: `url(${BRIAN_TPOSE_IMAGE})`,
                backgroundPositionY: "top"
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
