import React, { useEffect, useState } from 'react'
import { getDataPokemonPerName } from '../helpers/getDataPokemonPerName';

export const useDataPerNamePokemon = ( name ) => {
  const [pokemon, setPokemon] = useState([]);

  const getInfoDataPokemon = async() => {
    const newPokemon = await getDataPokemonPerName( name );
    setPokemon(newPokemon);
  }

  useEffect(() => {
    getInfoDataPokemon();

  }, [name])

  return{
    pokemon
  }
  

}
