import React from "react";

export default function SongkickWrapper() {
  if (!document.getElementById("songkick-script")) {
    const script = document.createElement("script");

    script.src = "//widget.songkick.com/8547819/widget.js";
    script.id = "songkick-script";
    script.async = true;

    document.body.appendChild(script);
  } else {
    let element = document.getElementById("songkick-script");
    element.parentNode.removeChild(element);

    const script = document.createElement("script");

    script.src = "//widget.songkick.com/8547819/widget.js";
    script.id = "songkick-script";
    script.async = true;

    document.body.appendChild(script);
  }

  return (
    <div id="songkick-wrapper" className="image-border">
      <a
        href="https://www.songkick.com/artists/8547819"
        className="songkick-widget"
        data-theme="light"
        data-track-button="on"
        data-detect-style="true"
        data-font-color="#333"
        data-background-color="transparent"
      >
        Folie Live
      </a>
    </div>
  );
}
