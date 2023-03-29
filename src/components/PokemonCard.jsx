import PropTypes from 'prop-types';

function PokemonCard({ pokemon }) {
  // const pokemon = pokemonList[1];

  return <div className="card">
    {pokemon.imgSrc ? (
      <img src={pokemon.imgSrc} className="card-img" />) : (<p>???</p>)}
    <figcaption>{pokemon.name}</figcaption>
  </div>
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.any.isRequired,
  }).isRequired,
}

export default PokemonCard;

