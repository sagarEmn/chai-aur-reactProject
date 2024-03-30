import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  //counter holds 5, setCounter triggers re-render
  console.log("Start: ", counter);

  const addValue = () => {
    counter = counter + 1; //counter calculates
    let valueWithinUpperLimit = Math.min(counter, 20);
    console.log(
      "Clicked",
      `\nValue of counter: ${counter}`,
      `\nLimited Value: ${valueWithinUpperLimit}`
    );
    //valueWithinLimit gets passed and replaces counter's value without changing counter's value
    setCounter(valueWithinUpperLimit); 
    //re-render counter after calculating
  };

  const removeValue = () => {
    counter = counter - 1;
    let valueWithinLowerLimit = Math.max(counter, 1);
    console.log(
      "Clicked", 
      `\nValue of counter: ${counter}`,
      `\nLimited Value: ${valueWithinLowerLimit}`
      );
    setCounter(valueWithinLowerLimit);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick={addValue}>Add value: </button>
      <br />
      <button onClick={removeValue}>Remove value: </button>
    </>
  );
}

export default App;
