// import PropTypes from 'prop-types';

function PokemonCard(props) {
  // const pokemon = pokemonList[1];

  return <div className="card">

    {props.pokemon.imgSrc ? (
      <img src={props.pokemon.imgSrc} className="card-img" />) : (<p>???</p>)}

    <figcaption>{props.pokemon.name}</figcaption>
  </div>
}



export default PokemonCard;

