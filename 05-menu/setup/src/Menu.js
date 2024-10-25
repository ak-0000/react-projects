import React from "react";

const Menu = ({ item }) => {
  const { img, desc  , title , category , price} = item;
  return (
    <div className="menu-item">
      <img className="photo" src={img} />
      <header className="item-info"> 
        <h4>{title}</h4>
        <p className="price">${price}</p>
        <p className="item-text"> {desc} </p>
      </header>
     </div>
  );
};

export default Menu;
