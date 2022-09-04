import { useState, useCallback } from "react";
import UseCallbackChild from "./useCallbackChild";

// Solves exact same problem as useMemo except useCallback can access the function but useMemo accesses the value.

const UseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <h1>useCallBack</h1>
      <UseCallbackChild returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h2>toggle</h2>}
    </div>
  );
};

export default UseCallback;
