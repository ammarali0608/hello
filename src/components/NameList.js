import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Ammar", "Salman", "Mujeeb"];

  const nameList = names.map((name) => <h2>{name}</h2>);

  const persons = [
    { id: 1, name: "Ammar", age: 21 },
    { id: 2, name: "Salman", age: 22 },
    { id: 3, name: "Mujeeb", age: 12 },
  ];

  const personList = persons.map((person) => <Person person={person} />);
  return <div>{personList}</div>;
}

export default NameList;
