
export const getDataPokemonPerType = async( urlPokemon = 'https://pokeapi.co/api/v2/type/1/' ) => {
  const url = urlPokemon;
  const resp = await fetch(url);
  const data = await resp.json();
  const pokemon = data.pokemon;

  const urls = pokemon.map( poke => ({
    url: poke.pokemon.url
  }));
  

  return urls;


}
