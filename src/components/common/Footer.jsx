import React, { Component } from "react";
import "./common.css";
import $ from "jquery";

export default class Footer extends Component {
  componentDidMount() {
    $("#main-footer").hide();
    document.addEventListener("scroll", () => {
      if (window.scrollY > $("#root").height() * 0.4) {
        $("#main-footer").show();
      } else {
        $("#main-footer").hide();
      }
    });
  }

  render() {
    return (
      <div id="main-footer">
        <div id="designed-by">
          <p>Designed and built by Nick Doherty</p>
          <a href="http://nicholasmdoherty.com">nicholasmdoherty.com</a>
        </div>

        <div id="social-links">
          <a href="https://twitter.com/notfolie">Twitter</a>
          <a href="https://www.instagram.com/notfolie/">Instagram</a>
          <a href="https://open.spotify.com/artist/3Zqgsigtoi91K3Nboh0qv4?si=U0rklrT9RvyH7rpdaOLkKA">
            Spotify
          </a>
          <a href="https://soundcloud.com/notfolie">Soundcloud</a>
        </div>
      </div>
    );
  }
}
