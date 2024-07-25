import React, { useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa";

const IncrementDecrementBtn = ({ minValue = 0, maxValue = 100 }) => {
  const [count, setCount] = useState(minValue);

  const handleIncrementCounter = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  const handleDecrementCounter = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div className="btn-group">
      <button className="btn" onClick={handleDecrementCounter}>
      <FaMinus />
      </button>
      <p className="count">{count}</p>
      <button className="btn" onClick={handleIncrementCounter}>
      <FaPlus />
      </button>
    </div>
  );
};

export default IncrementDecrementBtn;