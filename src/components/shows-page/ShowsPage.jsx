import React, { Component } from "react";
import autoBind from "react-autobind";
import { isBelowBreakpoint } from "../../common/constants";
import { Container, Row, Col, Card } from "react-bootstrap";
import Spacer from "../common/Spacer";
import "./show-page.css";
import SongkickWrapper from "./SongkickWrapper";

export default class ShowsPage extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.forceUpdate();
    });
  }

  renderShowsSection() {
    if (isBelowBreakpoint()) {
      return (
        <div className="w-100">
          <div className="d-flex text-left align-center">
            <div className="w-100">
              <h2 className="bold-header-font card-title">EVENTS</h2>
              <p className="main-paragraph" id="shows-section-paragraph">
                Ut faucibus pulvinar elementum integer. Nulla at volutpat diam
                ut venenatis tellus. Nisl purus in mollis nunc sed. Ipsum
                consequat nisl vel pretium. Augue ut lectus arcu bibendum. Eget
                aliquet nibh praesent tristique magna sit amet purus gravida.
                Sit amet luctus venenatis lectus magna fringilla.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-100 ">
          <div className="d-flex text-right align-center ">
            <div>
              <h2 className="bold-header-font card-title">EVENTS</h2>
              <p className="main-paragraph" id="shows-section-paragraph">
                Ut faucibus pulvinar elementum integer. Nulla at volutpat diam
                ut venenatis tellus. Nisl purus in mollis nunc sed. Ipsum
                consequat nisl vel pretium. Augue ut lectus arcu bibendum. Eget
                aliquet nibh praesent tristique magna sit amet purus gravida.
                Sit amet luctus venenatis lectus magna fringilla.
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div id="shows-section" className="full-section-wrapper">
        {this.renderShowsSection()}
      </div>
    );
  }
}
