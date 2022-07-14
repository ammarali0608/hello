import React from "react";

function FuncitonClick() {
  function clickHandler() {
    console.log("Function CLick");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FuncitonClick;

//EVENT HANDLING IN REACT
