import "./styles.css";
import UseState from "./useState";
import UseReducer from "./useReducer";
import UseEffect from "./useEffect";
import UseRef from "./useRef";
import UseLayout from "./useLayout";
import UseImperativeHandleParent from "./useImperativeHandleParent";
import UseContext from "./useContext";
import UseMemo from "./useMemo";
import UseCallback from "./useCallback";

export default function App() {
  return (
    <div className="App">
      <UseState />
      <br />
      <hr />
      <UseReducer />
      <br />
      <hr />
      <UseEffect />
      <br />
      <hr />
      <UseRef />
      <br />
      <hr />
      <UseLayout />
      <br />
      <hr />
      <UseImperativeHandleParent />
      <br />
      <hr />
      <UseContext />
      <br />
      <hr />
      <UseMemo />
      <br />
      <hr />
      <UseCallback />
      <br />
      <hr />
    </div>
  );
}
