import React, { useState } from "react";
import "../styles/App.css";
import Menu from "../Menu";
import menuData from "../data";

const App = () => {
  const [items, setItems] = useState(menuData);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(menuData);
    } else {
      setItems(menuData.filter(item => item.category.toLowerCase() === category));
    }
  };

  return (
    <div id="main">
      <h1 className="title">Our Menu</h1>
      <div className="underline"></div>

      <div className="btn-container">
        <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterItems("lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterItems("shakes")}>Shakes</button>
        <button onClick={() => filterItems("all")}>All</button>
      </div>

      <Menu items={items} />
    </div>
  );
};

export default App;
