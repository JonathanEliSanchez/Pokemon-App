import React from 'react'

export const getTypesPokemon = async() => {
  const url = 'https://pokeapi.co/api/v2/type/';
  const resp = await fetch(url);
  const data = await resp.json();
  const results = data.results;

  const pokemonTipos = results.map( pokemon => ({
    name: pokemon.name,
    url: pokemon.url
  }));

  return pokemonTipos;
  
}
