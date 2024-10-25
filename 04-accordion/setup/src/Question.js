import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo , setShowInfo] = useState(false) 
  return (
    <article className="question">
      <header>
        <h2>{title}</h2>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>{showInfo ? "-" : "+"} </button>
      </header>
        {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
