import { useState } from "react";

export default function UseState() {
  const [inputValue, setInputValue] = useState("Peter");

  let onChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="UseState">
      <h1>useState</h1>
      <input placeholder="enter soemthing... " onChange={onChange} />
      {inputValue}
    </div>
  );
}
