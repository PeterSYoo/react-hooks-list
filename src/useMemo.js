import axios from "axios";
import { useState, useEffect, useMemo } from "react";

export default function UseMemo() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setData(res.data);
      } catch {
        console.log(`couldn't get data`);
      }
    };
    fetchData();
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);
  // useMemo optimizes the code so it doesn't re-compute everytime a state in our app changes. Only time it would re-compute if our data changes. Not commonly used, only when the codebase utilizes a lot of data to be manipulated.

  return (
    <div>
      <h1>useMemo</h1>
      <div>{getLongestName}</div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h2> toggle </h2>}
    </div>
  );
}
