// Import React Component, which has built-in functionality
import React, { Component } from "react";
// Import variable
import chromeBoi from "./data.js";
// Import specific components (classes) from other files
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

// Inherit from Component. Set as default to export a single component from the file
export default class Matrix extends Component {
  // def initialize
  constructor() {
    // Inherits from Component and invokes the constructor
    super();
    // Sets the initial state for the class
    this.state = {
      selectedColor: "#fff"
    };
  }

  //! Passes in the previous state?
  // Callback
  // attr_writer
  setColor = newColor => {
    // You need to give setState a function, not an object.
    // Sets the state to the given color
    this.setState(
      {
        selectedColor: newColor
        // .then
      },
      () => console.log(this.state)
    );
  };

  // Callback
  // attr_reader
  announceColor = () => {
    return this.state.selectedColor;
  };

  // Creates a function that takes an array (vals) and its index, iterates over it and passes the data into the Cell component to create a new array of Cell HTML elements
  // Cell has props
  // Give cell the ability to call this.props.getSelectedColor and retrieve the return data
  genRow = vals =>
    vals.map((val, idx) => (
      <Cell key={idx} color={val} getSelectedColor={this.announceColor} />
    ));

  genMatrix = () =>
    // values is an array. It's being passed in from the parent component, so use this.props to access it. this.props.values is an array of arrays. rowVals is one of those arrays
    // Props here is values from index.js <Matrix values={chromeBoi} />
    this.props.values.map((rowVals, idx) => (
      // Set the key of the div equal to the index that was passed in. React uses 'key' to give a unique identifier instead of 'id'
      <div key={idx} className="row">
        {/* Calls the function (genRow) and passes in one array (rowVals) so it will map over one array, and now val will be one value in the array */}
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    // console.log(this.props.values);
    // Set what is rendered on the page
    return (
      <div id="app">
        {/* Render the return function of this component */}
        {/* Phone booth */}
        {/* Hey colorselector you can use the setcolor function too */}
        <ColorSelector setColor={this.setColor} />
        {/* Render a div with the return value of genMatrix, which creates a nested array */}
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

// Sets default props for Matrix so the code doesn't break
Matrix.defaultProps = {
  values: chromeBoi
};
