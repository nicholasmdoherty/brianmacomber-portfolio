import React, { Component } from "react";
import { isBelowBreakpoint } from "../../common/constants";
import "./landing-page.css";
import { Image } from "react-bootstrap";
import autoBind from "react-autobind";

export default class AboutSection extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.forceUpdate();
    });
  }

  renderAboutSection() {
    if (!isBelowBreakpoint()) {
      return (
        <div className="text-left mx-auto mb-0">
          <div className="d-flex about-img-desc">
            <div
              className="p-3 text-left maxw-50 justify-total-center"
              id="about-text-wrapper"
            >
              <h2 className="bold-header-font card-title">HI, I'M BRIAN</h2>
              <p
                className="main-paragraph color-dark"
                id="about-section-paragraph"
              >
                I'm a third year Boston University student studying Computer
                Engineering, a TA for an introductory programming course, and an
                all around tech enthusiast. I've worked on a few projects inside
                and outside of the classroom that I think really represent my
                abilities. I'm also looking for an internship this coming Summer
                of 2020 - if it sounds like my skills and experience could be of
                use to you, feel free to reach out and contact me.
              </p>
            </div>
            <div
              className="d-flex p-3 maxw-50 justify-total-center"
              id="about-image-wrapper"
            >
              <div className="image-border">
                <Image fluid src="img/brian-closeup.jpg" />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-left mx-auto m-4">
          <div>
            <h2 className="card-title bold-header-font">HI, I'M BRIAN</h2>
          </div>
          <div className="d-flex about-img-desc">
            <div className="h-100 p-3 image-border" id="about-image-wrapper">
              <Image fluid src="img/brian-closeup.jpg" />
            </div>
            <div className="h-100 p-3 text-left" id="about-text-wrapper">
              <p className="main-paragraph color-dark">
                I'm a third year Boston University student studying Computer
                Engineering, a TA for an introductory programming course, and an
                all around tech enthusiast. I've worked on a few projects inside
                and outside of the classroom that I think really represent my
                abilities. I'm also looking for an internship this coming Summer
                of 2020 - if it sounds like my skills and experience could be of
                use to you, feel free to reach out and contact me.
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div id="about-section-wrapper">{this.renderAboutSection()}</div>;
  }
}
