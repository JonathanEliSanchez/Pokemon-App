
export const getDataPokemonPerName = async( name = '' ) => {
    name = name.toLocaleLowerCase().trim();
    
    if( name.length === 0 ) return [];
    
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        
        const resp = await fetch(url);
        const data = await resp.json();

        const tipos = data.types.map(( pokemon ) => (pokemon.type.name));
        const pokemon = {
            id: data.id,
            name: data.name.toUpperCase(),
            height: data.height,
            weight: data.weight,
            image: data.sprites.other.dream_world.front_default,
            image2: data.sprites.other.home.front_default,
            image3: data.sprites.other['official-artwork'].front_default,
            image4: data.sprites.other['official-artwork'].front_shiny,
            tipo1: tipos[0],
            tipo2: tipos[1],    
         };
         return pokemon;
    }catch(error){
        console.log('falloooo');
        return {};
    }
       
    
   
}
    