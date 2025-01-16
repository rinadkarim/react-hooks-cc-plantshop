import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage(props) {
  return (
    <main>
      <NewPlantForm addPlant={props.addPlant} />
      <Search setSearch={props.setSearch} />
      <PlantList />
    </main>
  );
}

export default PlantPage;
