import { useEffect } from "react";

const UseCallbackChild = ({ returnComment }) => {
  useEffect(() => {
    console.log("USECALLBACK");
  }, [returnComment]);

  return <div>{returnComment("Peter")}</div>;
};

export default UseCallbackChild;
