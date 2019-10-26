import React, { Component } from "react";

export default class ReactHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      containerWidth: window.innerWidth,
      containerHeight: window.innerHeight,
      imgWidth: 100,
      imgHeight: 50,
      movingRight: true,
      movingDown: true
    };
  }

  shouldComponentUpdate() {
    let {
      x,
      y,
      movingRight,
      movingDown,
      imgHeight,
      imgWidth,
      containerWidth,
      containerHeight
    } = this.state;

    // Check if we have hit a wall here.
    if (x + imgWidth >= containerWidth || x <= 0) {
      this.setState({ movingRight: !movingRight });
    }
    if (y + imgHeight >= containerHeight || y <= 0) {
      this.setState({ movingDown: !movingDown });
    }

    if (movingRight) {
      // Do the movement for the text
      this.setState({ x: x + this.props.movementSpeed });
    } else {
      this.setState({ x: x - this.props.movementSpeed });
    }

    if (movingDown) {
      this.setState({ y: y + this.props.movementSpeed });
    } else {
      this.setState({ y: y - this.props.movementSpeed });
    }

    return true;
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <h1
          style={{
            position: "absolute",
            top: this.state.y,
            left: this.state.x
          }}
        >
          FOLIE
        </h1>
      </div>
    );
  }
}
