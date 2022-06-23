import { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import { getPokemon } from './services/fetch-utils.js';


export default function PokemonApp() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);

  const perPage = 18;

  useEffect(() => {
    async function fetchPokemon() {
      const from = page * perPage - perPage;
      const to = page * perPage - 1;
      const data = await getPokemon(from, to);
      setPokemon(data);
    }
    fetchPokemon();
  }, [page]);



  return (
    <div>
      <h2>Current Page {page}</h2>
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
      <label>show per page
        <select> 
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>
      </label>
      <PokemonList pokemons={pokemon}/>
    </div>
  );
}
