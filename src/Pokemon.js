import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  return (
    <Link to={`/pokemon-details/${pokemon.id}`}>
      <div className="pokemon">
        <h3>{pokemon.name}</h3>
        <img src={pokemon.png} />
      </div>
    </Link>
  );
}
