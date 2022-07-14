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
  // remember key is not a prop
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
