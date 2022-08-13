import React, { useState } from "react";

function ToyCard({toy, handleDeleteToy}) {
  const [likes, setLikes] = useState(toy.likes)

  function onClickDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => handleDeleteToy(toy.id))
  }

  function onClickLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({likes: likes + 1}),
    })
      .then(res => res.json())
      .then(updatedToy => setLikes(updatedToy.likes))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={onClickLike} className="like-btn">Like {"<3"}</button>
      <button onClick={onClickDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
