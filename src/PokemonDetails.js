import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonById } from './services/fetch-utils.js';


export default function PokemonDetails() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function getPokemonData() {
      const data = await getPokemonById(params.id);
      console.log(data);
      setPokemon(data);
    }

    getPokemonData();
  }, [params.id]);
  

  return (
    <div>Hello from PokemonDetails</div>
  );
}
