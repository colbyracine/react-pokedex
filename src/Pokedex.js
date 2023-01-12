import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Shows all pokemon in pokedex on individual cards
 *
 * Props:
 * -pokemon: Array of pokemon with {id, name, type, base_experience}
 */

function Pokedex({ exp, isWinner, pokemon }) {
  const winMessage = isWinner ? (
    <p className="Pokedex-winner">THIS HAND WINS</p>
  ) : null;

  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>

      <h4>Total Experience: {exp}</h4>
      {winMessage}
    </div>
  );
}

export default Pokedex;
