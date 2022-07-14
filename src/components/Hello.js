import React from "react";

const Hello = () => {
  //   return (
  //     <div id=''>
  //       <h1>Hello Ammar Ali</h1>
  //     </div>
  //   );

  //without JSX

  return React.createElement(
    "div",
    { id: "one", className: "divs" },
    React.createElement(
      "h1",
      { id: "two", className: "h1s" },
      "Hello Ammar ALi"
    )
  );
};

export default Hello;
