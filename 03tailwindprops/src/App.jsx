import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  //declaring an object for props
  let myObj = {
    username: "hitesh",
    age: 21,
  };

  let anotherObj = {
    nickname: "monkey",
    age: 200,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      {/* component App.jsx is parent since it's rendering Card component */}
      <Card first="eminem" btnTxt="Marshall" />
      <Card first="Rap God" btnTxt="EMINEM" />
    </>
  );
}
export default App;
