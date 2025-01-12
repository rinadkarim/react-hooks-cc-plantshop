import React from "react";
import {useState} from 'react';

function NewPlantForm(props) {
  
  //const[plants, setPlants] = useState(["Aloe", "ZZ-PLant", "Pilea Peperomioides", "Pothos", "Jade", "Monstera Deliciosa", "Fiddle-Leaf Fig"]);

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
  });

  const handleFormChange = event => {
    setFormData({
     ...formData,
     [event.target.name]: event.target.value,
    })
  };

  const handleAddPlant = (event) => {

      event.preventDefault();
       const newPlant = {
        ...formData,
       }
        // name: document.getElementById("plantInput").value;
      //  document.getElementById("plantInput").value = "";
      fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant),
      })
        .then((r) => r.json())
        .then((p) => props.addPlant(p));
       return false;
  };

  
  
  
  return (
    
    <div className="new-plant-form">
      <h2>New Plant</h2>
      
      <form id="plant-form" onSubmit={handleAddPlant}>
        <input type="text" name="name" onChange={handleFormChange} value={formData.name} placeholder="Plant name" />
        <input type="text" name="image" onChange={handleFormChange} value={formData.image} placeholder="Image  URL" />
        <input type="number" name="price" onChange={handleFormChange} value={formData.price} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>

      
    </div>
    
  );
}



export default NewPlantForm;