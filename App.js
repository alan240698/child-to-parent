import "./styles.css";
import React, { useState } from "react";
import Child from "./component/Child";
export default function App() {
  const [message, setMessage] = useState("");
  const handleCheck = (childData) => {
    setMessage(childData);
  };
  return (
    <div>
      <Child parentCallback={handleCheck} />
      <p> {message} </p>
    </div>
  );
}
