import React, { useEffect, useState } from 'react';
import { getDataPokemon } from '../helpers/getDataPokemon';

export const useDataPokemon = ( pokemon ) => {
  
    const [pokemonData, setPokemonData] = useState([]);

    const getInfoDataPokemon = async() => {
        const newPokemon = await getDataPokemon( pokemon );
        setPokemonData(newPokemon);
        
    }
  
    useEffect( () => {
        getInfoDataPokemon();
    }, [])


    return{
        pokemonData
       
    }


}
