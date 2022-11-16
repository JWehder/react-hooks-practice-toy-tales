import React, { useState, useContext } from "react";
import { ToysContext } from "../context/toys";

function ToyForm() {
  const { addNewToy } = useContext(ToysContext)

  const [newToy, setNewToy] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleChange(e) {
    setNewToy({
      ...newToy,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit() {
    addNewToy({
      name: newToy.name,
      image: newToy.image,
      likes: newToy.likes
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
