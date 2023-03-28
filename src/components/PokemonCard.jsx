function PokemonCard({ pokemon }) {
  // const pokemon = pokemonList[1];

  return <div className="card">
    {pokemon.imgSrc ? (
      <img src={pokemon.imgSrc} className="card-img" />) : (<p>???</p>)}
    <figcaption>{pokemon.name}</figcaption>
  </div>
}

export default PokemonCard;