import React from "react";
import "./styles/App.css";

const Menu = ({ items }) => {
  return (
    <div className="menu-section">
      {items.map((item) => (
        <article
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          <img src={item.img} alt={item.title} className="photo" />

          <div className="item-info">
            <header>
              <h4>{item.title}</h4>
              <h4 className="price">{item.price}</h4>
            </header>
            <p className="item-text">
              {item.desc ? item.desc : "Delicious food item"}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;
