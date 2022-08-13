import React, { useState } from "react";

function ToyForm({handleAddToy}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: "",
  })

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(newToy => handleAddToy(newToy))
  }

  return (
    <div className="container">
      <form
        className="add-toy-form"
        onSubmit={handleOnSubmit}
      >
        <h3>Create a toy!</h3>
        <input
          onChange={handleOnChange}
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
        onChange={handleOnChange}
          type="text"
          name="image"
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
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
