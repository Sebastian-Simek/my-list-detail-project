import { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import { getPokemon } from './services/fetch-utils.js';


export default function PokemonApp() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  
  async function fetchPokemon() {
    const from = page * perPage - perPage;
    const to = page * perPage - 1;
    const data = await getPokemon(from, to);
    setPokemon(data);
  }
  
  useEffect(() => {
    fetchPokemon();
  }, [page, perPage]);


  return (
    <div>
      <h2 className='page'>Page {page}</h2>
      <div className='button-div'>
        <div className='buttons'>
          <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
          <button onClick={() => setPage(page + 1)}>Next Page</button>
        </div>
        <div>items per page
          <select onChange={({ target: { value } }) => setPerPage(value)}> 
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
      
      <PokemonList pokemons={pokemon}/>
      
    </div>
    
  );
}
