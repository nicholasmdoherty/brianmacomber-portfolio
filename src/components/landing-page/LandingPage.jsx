import React, { Component } from "react";
import AboutSection from "./AboutSection";
import autoBind from "react-autobind";
import { scrollToRouting } from "../../App";
import $ from "jquery";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    scrollToRouting();
  }

  render() {
    return (
      <div className="full-section-wrapper">
        <AboutSection />
      </div>
    );
  }
}
