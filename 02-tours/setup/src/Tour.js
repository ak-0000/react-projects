import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour;
  const [readmore, setReadmore] = useState(false);
  return (
    <div className="single-tour">
      <div className="single-tour-hover">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readmore ? info : info.substring(0, 200)}...
            {console.log(readmore)}
            <button
              onClick={() => {
                setReadmore((readmore) => !readmore);
              }}
            >
              {readmore ? "see less" : "read more"}
            </button>
          </p>
          <button
            className="delete-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
            Interested
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Tour;
