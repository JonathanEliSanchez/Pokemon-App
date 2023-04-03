
export const getDataPokemon = async(pokemon) => {
    const url = pokemon;
    const resp = await fetch(url);
    const data = await resp.json();
    const tipos = data.types.map((poke) => (poke.type.name));
   
    const tipo1 = tipos[0];
    const tipo2 = tipos[1];

    const pokemonData = {
      id: data.id,
      name: data.name.toUpperCase(),
      height: data.height,
      weight: data.weight,
      image: data.sprites.other.dream_world.front_default,
      image2: data.sprites.other.home.front_default,
      image3: data.sprites.other['official-artwork'].front_default,
      tipo1: tipo1,
      tipo2: tipo2
     
    };

    return pokemonData;

 
}
