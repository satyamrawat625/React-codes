//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const date = new Date();
// const date = new Date(2023,1,1,15);//6 numbers specify year, month, day, hour, minute, second:


const time = date.getHours();

let greeting;
let customStyle = {
  color: "red"
};
if (time < 12) {
  greeting = "Good Morning";
  customStyle = {
    color: "red"
  };
} else if (time < 17) {
  greeting = "Good Afternoon";
  customStyle = {
    color: "orange"
  };
} else {
  greeting = "Good night";
  customStyle = {
    color: "blue"
  };
}
ReactDom.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
