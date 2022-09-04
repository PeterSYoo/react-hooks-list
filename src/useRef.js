import { useRef } from "react";

export default function UseRef() {
  // useRef is easiest way to access and manipulate DOM elements
  // if you feel like you run into a situation where you feel like you have to use vanilla js, you probably can solve it with useRef
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>useRef</h1>
      <h2>Peter</h2>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}
