import React from "react";
import "../styles/characters.css";

const Characters = ({ characters = [] }) => {
  return (
    <div className="container-characters">
      {characters.map((character, index) => (
        <div key={index} className="character">
          <h1>Nombre: {character.name}</h1>
          <h1>Species: {character.species}</h1>
          <img src={character.image} />
        </div>
      ))}
    </div>
  );
};

export default Characters;
