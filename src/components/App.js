import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function App() {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "Aloe",
      image: "/images/aloe.jpg",
      price: 15.99
    },
    {
      id: 2,
      name: "ZZ Plant",
      image: "/images/zz-plant.jpg",
      price: 25.98
    },
    {
      id: 3,
      name: "Pilea peperomioides",
      image: "/images/pilea.jpg",
      price: 5.99
    },
    {
      id: 4,
      name: "Pothos",
      image: "/images/pothos.jpg",
      price: 12.11
    },
    {
      id: 5,
      name: "Jade",
      image: "/images/jade.jpg",
      price: 10.37
    },
    {
      id: 6,
      name: "Monstera Deliciosa",
      image: "/images/monstera.jpg",
      price: 25.99
    },
    {
      id: 7,
      name: "Fiddle Leaf Fig",
      image: "/images/fiddle-leaf-fig.jpg",
      price: 55
    }
  ]);

  const handleAddPlant = (formData) => {
    const newPlant = {
      id: plants.length + 1, 
      ...formData
    };
    setPlants([...plants, newPlant]);
  };

  return (
    <div className="app">
      <Header />
      <main>
        
        <NewPlantForm onAddPlant={handleAddPlant} />
        <h3>Search Plants:</h3> 
        <PlantList plants={plants} />
        <PlantPage />
      </main>
    </div>
  );
}

export default App;