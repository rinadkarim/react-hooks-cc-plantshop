import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";


function Plantlist({search, plants, deletePlant}) {


return (
    <ul className="plant-container">
      {plants
        .filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
        .map(plant => {
          return (<PlantCard key={plant.id} id={plant.id} img={plant.image} name={plant.name} price={plant.price} deletePlant={deletePlant}/>)
        })}
      </ul>
);
    }
          
export default Plantlist;