import React, { useEffect, useState } from 'react';
import { getTypesPokemon } from '../helpers/getTypesPokemon';

export const useTiposPokemon = () => {
   
   
    const [pokemonTipos, setPokemonTipos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getPokemonTipos = async() => {
        const newTypePokemon = await getTypesPokemon();
        setPokemonTipos(newTypePokemon);
        setIsLoading(false);
       
    }
    useEffect( () => {
        getPokemonTipos();
    }, [])


    return{
        pokemonTipos,
        isLoading
    }


}
