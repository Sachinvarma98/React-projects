import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [length, setLength] = useState(10);
  return (
    <>
      <h1> The length is </h1>
      <div className="container">
        <h1> {length}</h1>
      </div>
      <div>

        <button onClick={() => { setLength((length) => length + 1) }}> Increase by +1  </button>
      </div>
      <div>

        <button onClick={() => setLength(length - 2)}> decrease by -2</button>
      </div>
    </>
  );
};

export default Counter;
