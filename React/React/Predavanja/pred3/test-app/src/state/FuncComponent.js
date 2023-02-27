import React, { useState } from "react";

// Using hooks
function FuncComponent() {
  const [count, setCount] = useState(103);

  const handleCountUp = () => {
    const newCountUp = count + 1;
    setCount(newCountUp);
  };

  const handleCountDown = () => {
    const newCountDown = count - 1;
    setCount(newCountDown);
  };

  return (
    <div>
      <div> Count je: {count}</div>
      <button onClick={handleCountDown}>Count down</button>
      <button onClick={handleCountUp}>Count up</button>
    </div>
  );
}
export default FuncComponent;
