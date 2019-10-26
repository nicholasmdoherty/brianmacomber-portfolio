import React, { Component } from "react";
import $ from "jquery";
import { isMobile } from "react-device-detect";
import autoBind from "react-autobind";
import { Link } from "react-router-dom";
import { scrollToRouting } from "../../App";
import "./common.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  /**
   * Toggles the navbar depending on which button was hit.
   * @param {String} button the button that was hit.
   */
  dropdownNavbar(button) {
    if (button === "home-button") {
      if ($("#nav-dropdown").hasClass("show")) {
        $("#nav-dropdown").toggleClass("show");
      }
    } else {
      $("#nav-dropdown").toggleClass("show");
    }
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      scrollToRouting();

      if (window.location.hash === "#/gallery") {
        $("#main-title").removeClass("d-none");
        $("#main-navbar").removeClass("transparent-nav");
        $("#main-navbar").addClass("main-navbar");
        $(".nav-item").removeClass("text-white");
        $(".nav-item").addClass("text-dark");
      } else if (window.location.hash === "#/") {
        $("#main-title").addClass("d-none");
        $("#main-navbar").addClass("transparent-nav");
        $("#main-navbar").removeClass("main-navbar");
        $(".nav-item").addClass("text-white");
        $(".nav-item").removeClass("text-dark");
      }
    });

    document.addEventListener("scroll", () => {
      if (!isMobile && window.innerWidth >= 576) {
        $("#logo-dropdown-wrapper").removeClass("justify-end");
        if (window.scrollY < window.innerHeight * 0.4) {
          if (window.location.hash !== "#/gallery") {
            $(".nav-item").addClass("text-white");
            $(".nav-item").removeClass("text-dark");
            $("#main-title").addClass("d-none");
            $("#main-navbar").addClass("transparent-nav");
            $("#main-navbar").removeClass("main-navbar");
          }
        } else {
          $("#main-navbar").removeClass("transparent-nav");
          $("#main-navbar").addClass("main-navbar");
          $("#main-title").removeClass("d-none");
          $(".nav-item").removeClass("text-white");
          $(".nav-item").addClass("text-dark");
        }
      } else if (isMobile || window.innerWidth < 576) {
        if (window.scrollY < window.innerHeight * 0.7) {
          if (window.location.hash !== "#/gallery") {
            $("#main-title").addClass("d-none");
            $("#main-navbar").addClass("transparent-nav");
            $("#main-navbar").removeClass("main-navbar");
            $("#dropdown-button")
              .css("color", "rgb(255,255,255)")
              .css("padding", "5px");
            $(".nav-item").addClass("text-white");
            $(".nav-item").removeClass("text-dark");
          }
          $("#logo-dropdown-wrapper").addClass("justify-end");
        } else {
          $("#main-title").removeClass("d-none");
          $("#main-navbar").removeClass("transparent-nav");
          $("#main-navbar").addClass("main-navbar");
          $("#logo-dropdown-wrapper").removeClass("justify-end");
          $("#dropdown-button")
            .css("color", "rgb(0,0,0)")
            .css("padding", "0px 4px");
          $(".nav-item").removeClass("text-white");
          $(".nav-item").addClass("text-dark");
        }
      }
    });

    window.addEventListener("resize", () => {
      this.forceUpdate();
    });
  }

  /**
   * Renders the navbar component.
   */
  render() {
    return (
      <nav
        className="navbar navbar-light navbar-expand-sm fixed-top transparent-nav"
        id="main-navbar"
      >
        <div
          id="logo-dropdown-wrapper"
          className={
            isMobile || window.innerWidth < 576
              ? "navbar-left d-flex w-100 justify-end"
              : "navbar-left d-flex w-100"
          }
        >
          <Link
            to="/"
            onClick={() => {
              this.dropdownNavbar("home-button");
            }}
          >
            <h2 id="main-title" className="d-none navbar-brand m-0">
              BRIAN MACOMBER
            </h2>
          </Link>

          <button
            id="dropdown-button"
            type="button"
            style={{
              border: "none",
              outline: "none",
              color:
                isMobile || window.innerWidth < 576
                  ? "rgb(255, 255, 255)"
                  : "rgb(0,0,0)",
              padding: isMobile || window.innerWidth < 576 ? "7px" : "0px 4px"
            }}
            className="navbar-toggler rounded cursor-pointer"
            data-toggle="collapse"
            data-target="#nav-dropdown"
          >
            <i className="fas fa-bars p-0 m-0 text-center" />
          </button>
        </div>

        <div
          className="collapse navbar-collapse text-right navbar-right justify-content-end"
          id="nav-dropdown"
        >
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li
              onClick={() => {
                this.dropdownNavbar("shows-button");
              }}
            >
              <Link
                to="/projects"
                className="nav-item active cursor-pointer no-underline text-white"
              >
                <div className="m-2">PROJECTS</div>
              </Link>
            </li>
            <li
              onClick={() => {
                this.dropdownNavbar("contact-button");
              }}
            >
              <Link
                to="/contact"
                className="nav-item active cursor-pointer no-underline text-white"
              >
                <div className="m-2">CONTACT</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
