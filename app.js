// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements

import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id: "parent"},[
 React.createElement("div",{id:"child"},[
  React.createElement("h1",{},"I'm an child"),
  React.createElement("h2",{},"I am 1st child")
 ]),
 React.createElement("div",{id:"child2"},[
  React.createElement("h1",{},"I'm an child"),
  React.createElement("h2",{},"I am 2nd child")
 ]),
]);

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);