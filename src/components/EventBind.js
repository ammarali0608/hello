import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Good Bye!",
    });
  }

  clickHandler2 = () => {
    this.setState({
      message: "Good Bye!",
    });
  };
  render() {
    return (
      <div>
        EventBind
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        <button onClick={() => this.clickHandler()}>Click</button>
        <button onClick={this.clickHandler}>Click</button>
        <button onClick={this.clickHandler2}>Click</button>
      </div>
    );
  }
}

export default EventBind;
// console.log(this); this is undefined in event handlers in react that's why we should bind the eventhandlers
// Methods to bind
// 1. <button onClick={this.clickHandler.bind(this)}>Click</button>;
// 2. Arrow Funtion
// 3. in constructor add a line ...
// 4. use an arrow function as class property
