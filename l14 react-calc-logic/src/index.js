import React from "react";
import ReactDOM from "react-dom";
import * as obj from "./calculator.js"
//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{obj.add(1, 2)}</li>
    <li>{obj.multiply(2, 3)}</li>
    <li>{obj.subtract(7, 2)}</li>
    <li>{obj.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
