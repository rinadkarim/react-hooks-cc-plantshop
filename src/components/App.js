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

  const [search, setSearch] = useState("")
  return (
    <div className="app">
      <Header />
      <PlantPage addPlant={addPlant} setSearch={setSearch} />
      <ul className="plant-container">
        {plants.filter(plant => plant.name.includes(search))
          .map(plant => {
          return (<PlantCard id={plant.id} img={plant.image} name={plant.name} price={plant.price} />)
        })}
      {/* <PlantCard id={1} picture={'./images/aloe.jpg'} name="Aloe" price={15.99} isInStock={true}/> 
      <PlantCard id={2} picture={'./images/zz-plant.jpg'} name="ZZ-PLant" price={25.98} isInStock={true}/>
      <PlantCard id={3} picture={'./images/aloe.jpg'} name="Pilea Peperomioides" price={5.99} isInStock={true}/>
      <PlantCard id={4} picture={'./images/aloe.jpg'} name="Pothos" price={12.11} isInStock={true}/> 
      <PlantCard id={5} picture={'./images/aloe.jpg'} name="Jade" price={10.37} isInStock={true}/>
      <PlantCard id={6} picture={'./images/aloe.jpg'} name="Monstera Deliciosa" price={25.99} isInStock={true}/>
      <PlantCard id={7} picture={'./images/aloe.jpg'} name="Fiddle-Leaf Fig" price={55} isInStock={true}/> */}
      
      </ul>
      <PlantList search={search}/>
    </div>
  );
  
}

export default App;
