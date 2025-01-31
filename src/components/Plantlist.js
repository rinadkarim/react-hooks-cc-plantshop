import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";


function Plantlist() {

const [plants, setPlants] = useState([]);
const [search, setSearch] = useState([]);
                 

  const addPlant = (plant) => {
    setPlants([...plants, plant]);
  }

  const deletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json())
    .then(response => setPlants(plants.filter((plant) => plant.id !== id)));
    };


        
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