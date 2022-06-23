
export default function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.png} />
    </div>
  );
}
