import React from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage({addPlant, setSearch}) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearch={setSearch} />
    </main>
  );
}

export default PlantPage;
