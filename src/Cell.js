import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  changeColor = () => {
    // When this cell is clicked, find out what the current color is using this callback
    const newColor = this.props.getSelectedColor();
    // Change the color of the cell to the selected color
    this.setState({
      // Will trigger a rerender because it's changing state
      color: newColor
    });
  };

  render() {
    return (
      // Add event listener that calls the function
      // Update the backgroundColor with the new color from the state
      <div
        className="cell"
        // Need this. because we are in a color
        onClick={this.changeColor}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}
