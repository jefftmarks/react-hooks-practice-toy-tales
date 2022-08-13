import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDeleteToy}) {
  return (
    <div id="toy-collection">
      {toys.map(toy => (
        <ToyCard
          key={toy.id}
          toy={toy}
          handleDeleteToy={handleDeleteToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
