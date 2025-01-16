import React, { useState } from "react";

function PlantCard(props) {
  const [status, setStatus] = useState('inStock');

  const toggleStatus = () => {
    if (status === 'inStock') {
      setStatus('outOfStock');
    } else if (status === 'outOfStock') {
      setStatus('soldOut');
    } else {
      setStatus('inStock');
    }
  }

  function getStockButton() {
    switch (status) {
      case 'inStock':
        return (<button className="primary" onClick={toggleStatus}>In Stock</button>);
      case 'outOfStock':
        return (<button className="secondary" onClick={toggleStatus}>Out of Stock</button>);
      case 'soldOut':
        return (<button className="sold-out" onClick={toggleStatus}>Sold Out</button>);
      default:
        return null;
    }
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={props.img} alt="plant name" /> 
      <h4>{props.name}</h4>
      <p>Price: {props.price}</p>
      {getStockButton()}
    </li>
  );
}

PlantCard.defaultProps = {
  isInStock: true,
}

export default PlantCard;



