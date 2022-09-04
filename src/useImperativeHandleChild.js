import { forwardRef, useImperativeHandle, useState } from "react";

const UseImperativeHandleChild = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    }
  }));

  return (
    <div>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </div>
  );
});

export default UseImperativeHandleChild;
