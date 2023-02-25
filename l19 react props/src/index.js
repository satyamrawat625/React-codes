import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="my-class">
      <h2>props.name</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1> My contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Kunal Kushwaha"
      img="https://avatars.githubusercontent.com/u/42698533?v=4"
      tel="8755705977"
      email="kk@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
