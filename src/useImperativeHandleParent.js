import { useRef } from "react";
import UseImperativeHandleChild from "./useImperativeHandleChild";

// Alters the state in a child from Parent.
export default function UseImperativeHandleParent() {
  const buttonRef = useRef(null);

  return (
    <div>
      <h1>useImperativeHandle</h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <UseImperativeHandleChild ref={buttonRef} />
    </div>
  );
}
