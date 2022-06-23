import { client, checkError } from './client';

export async function getPokemon() {
  const response = await client 
    .from('pokemon')
    .select('*');
  return checkError(response.data);
}

// Will come back to edit this and add functionality