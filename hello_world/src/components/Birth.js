import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function Birth() {
  const [count, setCount] = useState(45);
  const [count2, setCount2] = useState(78);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const increment2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <div>
        <h1> Jane Doe</h1>

        <h3></h3>
        <h3>Age : {count}</h3>
        <h3> Hair Color : Black</h3>

        <Button variant="contained" onClick={increment}>
          brithday Button for Jane Doe
        </Button>
      </div>
      <div>
        <h1>Will Smith</h1>
        <h3>Age : {count2}</h3>
        <h3> Hair Color : Black</h3>

        <Button variant="contained" onClick={increment2}>
          brithday button for Will Smith
        </Button>
      </div>
    </div>
  );
}
