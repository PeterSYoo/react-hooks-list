import { useEffect, useState } from "react";
import axios from "axios";

export default function UseEffect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setData(res.data[0].email);
        console.log("API WAS CALLED");
      } catch {
        console.log("no data");
      }
    };
    fetchData();
    // Will be called every single time a state is changed
  }, []);
  // If we let useEffect keep running, it will run useEffect multiple times because it runs once by default, then it will run again since we passed the retrieved data into the setData function.

  return (
    <div>
      <h1>useEffect</h1>
      {data}
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
