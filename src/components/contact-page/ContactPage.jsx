import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spacer from "../common/Spacer";
import { isBelowBreakpoint } from "../../common/constants";
import autoBind from "react-autobind";
import EmailForm from "./EmailForm";

export default class ContactPage extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.forceUpdate();
    });
  }

  renderContactSection() {
    if (isBelowBreakpoint()) {
      return (
        <div className="w-100">
          <div className="d-flex align-center">
            <div>
              <h2 className="bold-header-font card-title">CONTACT ME</h2>
              <p className="main-paragraph" id="shows-section-paragraph">
                Get in touch with me for booking shows or working on songs - I
                respond the fastest to DM’s. Use the links below or the email
                form to reach me.
              </p>
              <div className="d-flex justify-content-center">
                <a href="https://twitter.com/notfolie">
                  <i className="fab fa-2x fa-twitter color-white pl-2 pr-2 simple-shadow" />
                </a>
                <a href="https://www.instagram.com/notfolie/">
                  <i className="fab fa-2x fa-instagram color-white pl-2 pr-2 simple-shadow" />
                </a>
                <a href="https://soundcloud.com/notfolie">
                  <i className="fab fa-2x fa-soundcloud color-white pl-2 pr-2 simple-shadow" />
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex align-center" id="email-form">
            <EmailForm />
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-100 d-flex">
          <div className="maxw-50 d-flex align-center" id="email-form">
            <EmailForm />
          </div>
          <div className="maxw-50 d-flex text-right align-center">
            <div>
              <h2 className="bold-header-font card-title">CONTACT ME</h2>
              <p className="main-paragraph" id="shows-section-paragraph">
                Get in touch with me for booking shows or working on songs - I
                respond the fastest to DM’s. Use the links below or the email
                form to reach me.
              </p>
              <div className="d-flex justify-content-end">
                <a href="https://twitter.com/notfolie">
                  <i className="fab fa-2x fa-twitter color-white pl-3 pr-3 simple-shadow" />
                </a>
                <a href="https://www.instagram.com/notfolie/">
                  <i className="fab fa-2x fa-instagram color-white pl-3 pr-3 simple-shadow" />
                </a>
                <a href="https://soundcloud.com/notfolie">
                  <i className="fab fa-2x fa-soundcloud color-white pl-3 pr-3 simple-shadow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div id="contact-section" className="full-section-wrapper">
        {this.renderContactSection()}
      </div>
    );
  }
}
