import React, { Component } from "react";

const DestructingProps = ({ name, heroName, children }) => {
  // or const {name,heroName,children} = props
  //for states destruction
  // const {state1, state2 ,...} = this.state
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  );
};

export default DestructingProps;
