import React from 'react'

export const getDataPokemonPerId = async( id ) => {
 
 const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
 const resp = await fetch(url);
 const data = await resp.json();

 const tipos = data.types.map(( pokemon ) => (pokemon.type.name));

 const statsNumber = data.stats.map(( pokemon ) => ( pokemon.base_stat));
 const statsName = data.stats.map(( pokemon ) => ( pokemon.stat.name));




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
    statNumber1: statsNumber[0],
    statName1: statsName[0],
    statNumber2: statsNumber[1],
    statName2: statsName[1],
    statNumber3: statsNumber[2],
    statName3: statsName[2],
    statNumber4: statsNumber[3],
    statName4: statsName[3],
    statNumber5: statsNumber[4],
    statName5: statsName[4],
    statNumber6: statsNumber[5],
    statName6: statsName[5],

 };

 return pokemon;
}
