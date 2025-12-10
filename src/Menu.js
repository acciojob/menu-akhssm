import React from "react";
import "./styles/App.css";

const Menu = ({ items }) => {
  return (
    <div className="menu-container">
      {items.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category.toLowerCase()}`}
        >
          <img src={item.img} alt={item.title} className="menu-img" />
          <div className="menu-info">
            <header>
              <h4>{item.title}</h4>
              <h4 className="price">{item.price}</h4>
            </header>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
