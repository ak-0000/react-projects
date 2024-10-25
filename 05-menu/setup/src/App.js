import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menu, setMenu] = useState(items);

  return (
    <main className="menu">
      <h1 className="title">Our Menu</h1>
      <h1 className="underline"></h1>
      <div className="btn-container">
        <button className="filter-btn" onClick={() => setMenu(items)}>
          All
        </button>
        <button
          className="filter-btn"
          onClick={() =>
            setMenu(items.filter((item) => item.category == "breakfast"))
          }
        >
          BreakFast
        </button>
        <button
          className="filter-btn"
          onClick={() =>
            setMenu(items.filter((item) => item.category == "lunch"))
          }
        >
          lunch
        </button>
        <button
          className="filter-btn"
          onClick={() =>
            setMenu(items.filter((item) => item.category == "shakes"))
          }
        >
          Shakes
        </button>
      </div>

      <section className="section-center">
        {menu.map((item) => (
          <Menu key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}

export default App;
