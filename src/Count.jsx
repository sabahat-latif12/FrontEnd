import { useEffect, useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(7);

  const clickHandler = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("usereffact afer count", count);
    return () => {
      console.log("usereffact for cleanUp", count);
    };
  }, [count]);
  return (
    <>
      <h1>{props.itemName}</h1>
      <h1>{count}</h1>
      <button onClick={clickHandler}>increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
