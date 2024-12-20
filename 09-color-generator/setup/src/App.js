import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("h");
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <article>
      <section>
        <form method="submit" className="container" onSubmit={handleSubmit}>
          <h3>Color-Generator</h3>
          <input
            type="text"
            placeholder={"#f15025"}
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? `error` : null}`}
          ></input>
          <button id="ColorGenerator" type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </article>
  );
}

export default App;
