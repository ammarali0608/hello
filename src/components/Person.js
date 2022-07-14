import React from "react";

function Person(props) {
  return (
    <div>
      <h2>
        I am {props.person.name} and {props.person.age} years old.
      </h2>
    </div>
  );
}

export default Person;
