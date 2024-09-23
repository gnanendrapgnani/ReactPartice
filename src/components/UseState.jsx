import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const IncremenCount = () => {
    setCount((prev) => prev + 1);
  };

  const DecrmentCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={IncremenCount}>+</button>
      <h3>{count}</h3>
      <button onClick={DecrmentCount}>-</button>
    </div>
  );
};

export default UseState;
