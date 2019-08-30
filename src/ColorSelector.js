import React, { Component } from "react";
import Matrix from "./Matrix";

export default class ColorSelector extends Component {
  makeColorSwatches = () =>
    [
      "#F00",
      "#F80",
      "#FF0",
      "#0F0",
      "#00F",
      "#508",
      "#90D",
      "#FFF",
      "#000"
      // str = selectedColor
    ].map((str, idx) => {
      return (
        <div
          key={idx}
          className="color-swatch"
          // Call the Matrix back. Use its function
          // Pass the new color to it
          // () and => create an anonymous function. here's your instructions when you're ready. otherwise it calls it right away and always set the color to the last color
          onClick={() => this.props.setColor(str)}
          style={{ backgroundColor: str }}
        />
      );
    });

  render() {
    return <div id="colorSelector">{this.makeColorSwatches()}</div>;
  }
}
