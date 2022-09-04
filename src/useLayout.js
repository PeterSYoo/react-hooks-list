import { useLayoutEffect, useEffect, useRef } from "react";

export default function UseLayout() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  // useLayoutEffect is called earlier than useEffect, always.
  // useLayoutEffect happens before the page is rendered once.

  useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);
  // useEffect is only shown after the page is rendered once.

  return (
    <div>
      <h1>useLayout</h1>
      <input ref={inputRef} value="PETER" style={{ width: 400, height: 100 }} />
    </div>
  );
}
