import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonById } from './services/fetch-utils.js';


export default function PokemonDetails() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();
  useEffect(() => {

    async function getPokemonData() {
      const data = await getPokemonById(params.id);
      setPokemon(data);
    }

    getPokemonData();
  }, [params.id]);
  

  return (
    <div className='pokemon-detail-box'>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.gif} width='200px'/>
      <div className='stats'>
        <p>Type:</p>
        <p> {pokemon.type1} {`, ${pokemon.type2}`}</p>
        <ul> Stats:
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Speed: {pokemon.speed}</li>
          <li>Special Attack: {pokemon.special}</li>
        </ul>
      </div>
      <div className='description'>
        <p>{pokemon.description}</p>
      </div>
    </div>
  );
}
