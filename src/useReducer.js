import { useReducer } from "react";

export default function UseReducer() {
  const reducer = (state, action) => {
    // 1st argument is the value of the state you are managing
    // 2nd argument is the action we want to take for each of our states
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };
      case "toggleShowText":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  // dispatch function is called to alter the state variable

  return (
    <div>
      <h1>useReducer</h1>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
}
