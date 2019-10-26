import React from "react";

export default function Spacer(props) {
  if (props.percentage) {
    return <div style={{ height: `${props.percentage}vh` }} />;
  } else if (props.pixels) {
    return <div style={{ height: `${props.pixels}px` }} />;
  }
}
