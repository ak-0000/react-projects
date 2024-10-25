import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeoples] = useState(data);
  console.log(people);
  const [index, setIndex] = useState(0);

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>Reviews</h2>
          <div className="section-center">
            {people.map((person) => {
              const {id , name , image , quote , title} = person ;
              return (<article key={id}><img className="person-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              </article>)
            })}
          <button className="prev" onClick={() => setIndex(index-1)}>{"<"}</button>
          <button className="next" onClick={() =>setIndex(index+1)}>{">"}</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
