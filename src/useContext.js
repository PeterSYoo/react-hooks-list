import { useState, createContext } from "react";
import Login from "./useContextLogin";
import User from "./useContextUser";

export const AppContext = createContext(null);
// A context is a collection of states you want to access the whole tree inside the current component.

const UseContext = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div>
        <h1>UseContext</h1>
        <Login />
        <User />
      </div>
    </AppContext.Provider>
  );
};

export default UseContext;
