
export const getPokemon = async( numberPage ) => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${numberPage}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const results = data.results;
    
    const pokemones = results.map( pokemon => ({
      url: pokemon.url
    }));
  
    return pokemones;
  }
  