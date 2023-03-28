const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    name: "mew",
  },
];

//On a une variable qui est égale à un tableau d'objets
//On veut que le return affiche l'imgSrc SEULEMENT si il y en a une, si undefined, afficher un p "???"

// === "" ? { pokemon.imgSrc } : } 


function PokemonCard() {
  const pokemon = pokemonList[1];

  return <div>
    {pokemon.imgSrc ? (<img src={pokemon.imgSrc} />) : (<p>???</p>)}
    <figcaption>{pokemon.name}</figcaption>
  </div>
}



export default PokemonCard;