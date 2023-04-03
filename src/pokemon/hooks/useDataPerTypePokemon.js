import { useEffect, useState } from 'react';
import { getDataPokemonPerType } from "../helpers/getDataPokemonPerType";

export const useDataPerTypePokemon = ( urlPokemon ) => {

    const [pokemon, setPokemon] = useState([]);

    const getInfoperPokemon = async() => {
        const newPokemon = await getDataPokemonPerType( urlPokemon );
        setPokemon(newPokemon);
    }
  
    useEffect( () => {
        getInfoperPokemon();
    }, [urlPokemon])

    return{
        pokemon    
    }

}
