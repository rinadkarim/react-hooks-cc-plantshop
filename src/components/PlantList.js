import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchPlants() {
      try {
        const response = await fetch('http://localhost:6001/plants');
        if (!response.ok) {
          throw new Error('Failed to fetch plant data');
        }
        const plantsData = await response.json();
        setPlants(plantsData);
        setFilteredPlants(plantsData); 
      } catch (error) {
        console.error('Error fetching plant data:', error);
      }
    }

    fetchPlants();
  }, []);

  useEffect(() => {
    
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPlants(filtered);
  }, [plants, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type A Name To Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul className="cards">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
            inStock={plant.inStock}
          />
        ))}
      </ul>
    </div>
  );
}

export default PlantList;