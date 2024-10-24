import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import axios from "axios";
import Tour from "./Tour";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const getdata = async () => {
    const res = await axios.get(url);
    setTours(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <main>
      {loading && (
        <main>
          <Loading />
        </main>
      )}
      {!loading && <Tours tours={tours} removeTour={removeTour}></Tours>}
      {!loading && tours.length == 0 && (
        <button
          className="btn"
          onClick={() => {
            getdata();
          }}
        >
          Refresh
        </button>
      )}
    </main>
  );
}

export default App;
