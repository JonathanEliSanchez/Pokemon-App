import { useEffect, useState } from 'react';
import { getDataPokemonPerId } from '../helpers/getDataPokemonPerId';

export const useDataPerIdPokemon = ( id ) => {

    const [pokemon, setPokemon] = useState([]);

    const getInfoDataPokemon = async() => {
        const newPokemon = await getDataPokemonPerId( id );
        setPokemon(newPokemon);
        
    }
  
    useEffect( () => {
        getInfoDataPokemon();
    }, [])


    return{
        pokemon
       
    }

}
