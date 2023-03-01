function CountComponent({
  count,
  onPlus,
  onMinus,
  onPlus5,
  onPlusN,
  onMinusN,
}) {
  const handlePlus = () => {
    onPlus();
  };

  const handlePlus5 = () => {
    onPlus5();
  };

  const handleMinus = () => {
    onMinus();
  };

  const handlePlus10 = () => {
    onPlusN(10);
  };

  return (
    <div>
      Count je: {count}
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlus5}>+5</button>
      <button onClick={handlePlus10}>+10</button>
      <button onClick={() => onMinusN(7)}>-N</button>{" "}
      {/* Kraca verzija ako
      mijenjamo samo argument */}
    </div>
  );
}

export default CountComponent;
