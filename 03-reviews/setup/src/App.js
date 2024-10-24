import React from "react";
import Review from "./Review";
import reviews from "./data";
import { useState } from "react";
function App() {
  const [treview, setTReviews] = useState(reviews);
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
