import React from "react";
import Tour from "./Tour";
const Tours = ({ tours , removeTour}) => {
  return (
    <article>
      <div className="title">
        <h2>Ours tours</h2>
        <div className="underline"></div>
        <div>
          <div>{tours.map(tour => <Tour key={tour.id} tour={tour} removeTour={removeTour}/>)}</div>
        </div>
      </div>
    </article>
  );
};

export default Tours;
