import React from "react";
const Pizza = ({ name, ingredients, price, photoUrl }) => {
  return (
    <div className="pizza">
      <img src={photoUrl} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Pizza;
