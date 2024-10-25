import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import axios from "axios";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  const getdata = async () => {
    const res = await axios.get(url);
    console.log(res.data);
    setUsers(res.data);
  };

  useEffect(() => {
    getdata();
  }, []);
  if (users.length == 0) {
    return <Loading />;
  }
  const { title, company , dates } = users[index];

  return (
    <main className="section">
      <div className="underline"> </div>
        <h4 className="title">{title}</h4>
        <h4 className="company">{company} </h4>
        <h4>{dates}</h4>

      <div className="jobs-center">
        <div className="btn-container">
          {users.map((user) => (
            <button
              className="job-btn"
              key={user.id}
              onClick={() => setIndex(user.order % users.length)}
            >
              {user.title}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

function Loading() {
  return <div>Loading</div>;
}

export default App;
