import React, { useEffect, useState } from "react";

function PlantCard({id,img,name,price, deletePlant, updatePlant}) {
  const [status, setStatus] = useState("inStock");
  const [newPrice, setNewPrice] = useState(price);
 console.log(img);

  const toggleStatus = () => {
    if (status === "inStock") {
      setStatus("outOfStock");
    } else if (status === "outOfStock") {
      setStatus("soldOut");
    } else {
      setStatus("inStock");
    }
  };

  const handlePriceChange = (event) => {
    setNewPrice(event.target.value);
  };

  const handleUpdatePrice = async () => {
    const updatedPlant = { price: parseFloat(newPrice) };
    
    const response = await fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    });

    if (response.ok) {
      const updatedData = await response.json();
      updatePlant(updatedData);
    } else {
      alert("Failed to update price");
    }
  };

  

  const handleDelete = (event) => {
    deletePlant(id);
  }
    

  function getStockButton() {
    switch (status) {
      case "inStock":
        return (
          <button className="primary" onClick={toggleStatus}>
            In Stock
          </button>
        );
      case "outOfStock":
        return (
          <button className="secondary" onClick={toggleStatus}>
            Out of Stock
          </button>
        );
      case "soldOut":
        return (
          <button className="sold-out" onClick={toggleStatus}>
            Sold Out
          </button>
        );
      default:
        return null;
    }
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>
        Price: {price}<br/>
        <input
          type="number"
          value={newPrice}
          onChange={handlePriceChange}
          min="0"
        />
      </p>
      {getStockButton()}<br></br>
      <button className="update" onClick={handleUpdatePrice}>Update Price</button>
      <div key={id}>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
      </div>
    </li>
  );
}

PlantCard.defaultProps = {
  isInStock: true,
};

export default PlantCard;





