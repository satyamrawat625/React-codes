import React from "react";

function App() {
  const [count, setcount] = React.useState(77); //returns value , function

  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    setcount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default App;
