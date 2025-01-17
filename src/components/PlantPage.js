import React from "react";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage(props) {
  return (
    <main>
      <NewPlantForm addPlant={props.addPlant} />
      <Search setSearch={props.setSearch} />
    </main>
  );
}

export default PlantPage;
