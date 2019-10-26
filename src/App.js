import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import MainHeader from "./components/landing-page/header/MainHeader";
import ContactPage from "./components/contact-page/ContactPage";
import { Container, Row, Col } from "react-bootstrap";
import Spacer from "./components/common/Spacer";
import $ from "jquery";
import WeatherWear from "./components/weather-wear/WeatherWear";
import FeminineHygiene from "./components/feminine-hygiene/FeminineHygiene";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Route
            exact
            path="/(projects|contact|)/"
            render={() => {
              return (
                <div>
                  <MainHeader />
                  <Container>
                    <Row>
                      <Col>
                        <LandingPage />
                        <Spacer percentage={7} />
                      </Col>
                    </Row>
                  </Container>
                  <div id="projects-section">
                    <WeatherWear />
                    <FeminineHygiene />
                  </div>
                  <Spacer percentage={7} />
                  <Container>
                    <Row>
                      <Col>
                        <ContactPage />
                        <Spacer percentage={20} />
                      </Col>
                    </Row>
                  </Container>
                </div>
              );
            }}
          />
          <Footer />
        </Router>
      </div>
    );
  }
}

/**
 * Handles auto-scrolling to the section relating to the hash parameter in the URL.
 */
export function scrollToRouting() {
  let scrollAnimTime = 500;

  switch (window.location.hash) {
    case "#/":
      if (!(window.scrollY === 0)) {
        $("html, body").animate(
          {
            scrollTop: 0
          },
          scrollAnimTime
        );
      }
      return;
    case "#/contact":
      let contactOffset = $("#contact-section").offset().top - 75;
      if (!(window.scrollY === contactOffset)) {
        $("html, body").animate(
          {
            scrollTop: contactOffset
          },
          scrollAnimTime
        );
      }
      return;
    case "#/projects":
      let projectOffest = $("#projects-section").offset().top - 75;
      if (!(window.scrollY === projectOffest)) {
        $("html, body").animate(
          {
            scrollTop: projectOffest
          },
          scrollAnimTime
        );
      }
      return;
    default:
      return;
  }
}

export default App;
