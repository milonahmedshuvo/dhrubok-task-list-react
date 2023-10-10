import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };


  
  return (
    <div className="py-8 px-10">
      <h2 className="text-xl font-semibold">Counter Page</h2>
      <div className="flex mt-8 items-center gap-5">
        <button
          className="bg-gradient-to-r duration-300 from-blue-500 via-blue-600 to-blue-700 hover:from-purple-500 hover:to-purple-700 text-white px-3 py-1 rounded-lg"
          onClick={incrementCounter}
        >
          Increment
        </button>
        <p className="text-xl font-bold"> {count}</p>
        <button
          className="bg-gradient-to-r duration-300 from-blue-500 via-blue-600 to-blue-700 hover:from-purple-500 hover:to-purple-700 text-white px-3 py-1 rounded-lg"
          onClick={decrementCounter}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
