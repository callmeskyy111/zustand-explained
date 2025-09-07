//import { useState } from "react";
import { useEffect } from "react";
import { useCounterStore } from "./Store";

function logCount() {
  // Not a custom-hook
  const count = useCounterStore.getState().count;
  console.log(`Count: ${count}`);
}

function setCount() {
  // Not a custom-hook
  useCounterStore.setState({ count: 100 });
}

export default function App() {
  const count = useCounterStore((state) => state.count);
  // or
  // const {count} = useCounterStore((state) => state); // less performant
  return (
    <>
      <OtherComponent count={count} />
    </>
  );
}

function OtherComponent({ count }) {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);

  useEffect(() => {
    logCount();
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <br />
        <button onClick={incrementAsync}>IncrementAsync ⌛</button>
        <button onClick={setCount}>Set Count to 100</button>
      </div>
    </div>
  );
}
