import { useState } from 'react';
import PokemonCard from "./components/PokemonCard";
import Button from "./components/NavBar"

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {

  const [index, setIndex] = useState(0)
  const pokemon = pokemonList[index];

  function handlePlusClick() {
    setIndex(index + 1);
  }

  function handleMinusClick() {
    setIndex(index - 1);
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <Button
        index={index}
        handlePlusClick={handlePlusClick}
        handleMinusClick={handleMinusClick} />
    </div>
  );
}

export default App