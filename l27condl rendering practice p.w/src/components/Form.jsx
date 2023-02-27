import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered === false && (
        <input type="password" placeholder="Cofirm Password" />
      )}
      <button type="submit">{props.isRegistered ? "Register" : "Login"}</button>
      :{" "}
    </form>
  );
}

export default Form;
