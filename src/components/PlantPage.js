import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantCard from "./PlantCard";
import Plantlist from "./Plantlist"

function PlantPage() {

const [plants, setPlants] = useState([]);
const [search, setSearch] = useState("")

 useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  const addPlant = (plant) => {
    setPlants([...plants, plant]);
  }

  const updatePlant= (newPlant) => {
    const newPlants = [...plants].map((plant) =>  {
      if(plant.id === newPlant.id) {
        return newPlant;
      } else {
        return plant;
      }
    });
    setPlants([...newPlants]);
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
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearch={setSearch} />
      <Plantlist search={search} plants={plants} deletePlant={deletePlant} updatePlant={updatePlant}/>
    </main>
  );
}

export default PlantPage;
