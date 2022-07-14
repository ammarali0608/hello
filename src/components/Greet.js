import React from "react";

// export const Greet = () => <h1>Hello Ammar</h1>;

//props

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
};

export default Greet;
