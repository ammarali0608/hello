import React, { Component } from "react";

class ClassCLick extends Component {
  clickHandler() {
    console.log("Class CLick");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassCLick;
