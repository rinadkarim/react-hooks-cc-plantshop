import React from "react";
import {useState} from 'react';
// import aloePic from './images/aloe.jpg'
import calatheaPic from './images/calathea.jpg'
import fiddlePic from './images/fiddle-leaf-fig.jpg'


function PlantCard(props) {

  const [isInStock, setIsInStock] = useState(true);

 

  const toggleInStockStatus = () => {
    setIsInStock(!isInStock);
  }

  function getStockButton() {
    if(isInStock){
      return (<button className="primary" onClick={toggleInStockStatus}>In Stock  </button>)
    } else {
      return(<button className="secondary" onClick={toggleInStockStatus}>Out of Stock </button>)
    }
}  
  return (
      
    <li className="card" data-test id="plant-item">
      <img src={props.img} alt="plant name" /> 
      <h4>{props.name}</h4>
      <p>Price:{props.price}</p>

      
        
      {getStockButton()}
        
      </li>
    
  );

}



PlantCard.defaultProps= {
  isInStock: true,
}

export default PlantCard;
