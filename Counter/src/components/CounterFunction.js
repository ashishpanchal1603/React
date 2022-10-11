import React, { useState } from "react";

export default function CounterFunction() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        className="btn btn-warning increment fw-bold"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <span>{count}</span>
      <button
        className="btn btn-danger decrement fw-bold"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </>
  );
}
