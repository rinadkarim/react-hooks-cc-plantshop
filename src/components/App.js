import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import PlantCard from "./PlantCard";
import PlantList from "./PlantList";



function App() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  const addPlant = (plant) => {
    setPlants([...plants, plant]);
  }

  const deletePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
  };

  const [search, setSearch] = useState("")
  return (
    <div className="app">
      <Header />
      <PlantPage addPlant={addPlant} setSearch={setSearch} />
      <ul className="plant-container">
      {plants
        .filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
        .map(plant => {
          return (<PlantCard key={plant.id} id={plant.id} img={plant.image} name={plant.name} price={plant.price} deletePlant={deletePlant}/>)
        })}
      </ul>
      <PlantList search={search}/>
    </div>
  );
  
}

export default App;
