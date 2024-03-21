
import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data.plants);
      })
      .catch((error) => {
        console.error("Error fetching plants data:", error);
      });
  }, []);

  const onAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  return (
    <main>
     
      <ul className="cards">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
          />
        ))}
      </ul>
    </main>
  );
}

export default PlantPage;