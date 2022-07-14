import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // ternary
    // return this.state.isLoggedIn ? (
    //   <div>Helo Ammar</div>
    // ) : (
    //   <div>Helo Guest</div>
    // );

    // if (this.state.isLoggedIn) {
    //   return <div>Helo Ammar</div>;
    // } else {
    //   return <div>Helo Guest</div>;
    // }

    // if (this.state.isLoggedIn) {
    //   elem =  <div>Helo Ammar</div>
    // } else {
    //   elem =  <div>Helo Guest</div>
    // }
    // return elem

    //Short Circuit Operator
    return this.state.isLoggedIn && <div>Welcome Ammar</div>;
  }
}

export default UserGreeting;
