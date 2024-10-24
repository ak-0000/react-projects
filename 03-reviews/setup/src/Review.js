import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  console.log(people[index]);

  const check = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    return setIndex(() => check(index - 1));
  };

  const nextPerson = () => {
    setIndex(() => check(index + 1));
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    // console.log(value);
    if(randomNumber == index){
      randomNumber = check(index+1);
    }
    setIndex(randomNumber);
  };

  const { image, name, job, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} />
      </div>
      <h4 className="author">{name}</h4>
      <h3 className="job">{job}</h3>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevPerson}>
          -
        </button>
        <button className="next-btn" onClick={nextPerson}>
          +
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
