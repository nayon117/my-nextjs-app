"use client";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="space-y-3">
      <h3 className="text-2xl">Counter: {counter}</h3>
      <button
        className="btn btn-primary mr-3"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <button
        className="btn btn-error"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>
    </div>
  );
};
export default Counter;
