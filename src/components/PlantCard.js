import React, { useState } from "react";
import PlantPage from "./PlantPage";
function PlantCard({ id, name, image, price, inStock }) {
  const [isInStock, setIsInStock] = useState(inStock);

  const toggleAvailability = () => {
    setIsInStock(!isInStock);
  };

  return (
    <li className="card" data-testid={`plant-item-id`}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={toggleAvailability}>
        {isInStock ? "Mark as Sold Out" : "Mark as In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
