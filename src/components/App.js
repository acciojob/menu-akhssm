import React, { useState } from "react";
import "../styles/App.css";

const menuData = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: "$ 15.99",
    img: "https://react-projects-5-menu.netlify.app/images/item-1.jpeg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: "$ 13.99",
    img: "https://react-projects-5-menu.netlify.app/images/item-2.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: "$ 6.99",
    img: "https://react-projects-5-menu.netlify.app/images/item-3.jpeg",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "lunch",
    price: "$ 20.99",
    img: "https://react-projects-5-menu.netlify.app/images/item-4.jpeg",
    desc: "Shabby chic k_effiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "breakfast",
    price: "$ 22.99",
    img: "https://react-projects-5-menu.netlify.app/images/item-5.jpeg",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: "$ 18.99",
    img: "https://react-projects-5-menu.netlify.app/images/item-6.jpeg",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.",
  },
];

const App = () => {
  const [items, setItems] = useState(menuData);
  const [category, setCategory] = useState("all");

  const filterItems = (cat) => {
    setCategory(cat);
    if (cat === "all") {
      setItems(menuData);
    } else {
      setItems(menuData.filter((item) => item.category === cat));
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

      <div className="menu-section">
        {items.map((item) => (
          <article key={item.id} className="menu-item">
            <img src={item.img} className="photo" alt={item.title} />

            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">{item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default App;
