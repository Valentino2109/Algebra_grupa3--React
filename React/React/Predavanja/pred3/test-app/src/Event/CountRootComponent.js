import { useState } from "react";
import CountComponent from "./CountComponent";

function CountRootComponent() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handlePlus5 = () => {
    const newCount = count + 5;
    setCount(newCount);
  };

  const handleMinus = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const handlePlus10 = () => {
    const newCount = count + 10;
    setCount(newCount);
  };

  const handleMinusN = (n, a, b, c) => {
    const newCount = count - n;
    setCount(newCount);
  };

  return (
    <div>
      <CountComponent
        count={count}
        onPlus={handlePlus}
        onMinus={handleMinus}
        onPlus5={handlePlus5}
        onPlusN={handlePlus10}
        onMinusN={handleMinusN}
      />
    </div>
  );
}

export default CountRootComponent;
