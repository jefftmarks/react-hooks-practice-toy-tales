import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(toyData => setToys(toyData))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDeleteToy(deleteId) {
    const newToys = toys.filter(toy => toy.id !== deleteId);
    setToys(newToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeleteToy={handleDeleteToy}/>
    </>
  );
}

export default App;
