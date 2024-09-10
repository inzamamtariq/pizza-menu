import React from "react";
import Pizza from "../views/Pizza";
import pizzaData from "../assets/data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoUrl={pizza.photoUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default Menu;
