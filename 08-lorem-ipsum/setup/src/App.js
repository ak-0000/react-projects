import React, { useEffect, useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setparagraphs] = useState(data);
  // console.log(paragraphs);
  const [number, setNumber] = useState(0);

  const handleParagraph = (e) => {
    e.preventDefault();
    let count = parseInt(number);
    if (number > 50) {
      count = 8;
    }
    if (number <= 0) {
      count = 1;
    }
    const newArray = data.slice(0, parseInt(count));
    setparagraphs(newArray);
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum ?</h3>
      <form
        method="submit"
        action="post"
        className="lorem-form"
        onSubmit={handleParagraph}
      >
        <label htmlFor="paragraphs"> paragraphs : </label>
        <input
          type="Number"
          placeholder="enter a number"
          name="paragraphs"
          id="paragraphs"
          value={number}
          onChange={(e) => {
            setNumber(parseInt(e.target.value));
          }}
        ></input>
        <button type="submit" className="btn" onSubmit={handleParagraph}>
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => (
          <p className="result" key={index}>
            {paragraph}
          </p>
        ))}
      </article>
    </section>
  );
}

export default App;
