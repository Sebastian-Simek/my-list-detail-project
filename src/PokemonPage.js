import { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import { getPokemon } from './services/fetch-utils';


export default function PokemonApp() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    async function fetchPokemon() {
      const data = await getPokemon();
      console.log(data);
      setPokemon(data);
    }
    fetchPokemon();
  });

  return (
    <div>
      <PokemonList />
    </div>
  );
}
