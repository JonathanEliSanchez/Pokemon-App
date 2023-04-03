import { useEffect, useState } from "react";
import { getPokemon } from "../helpers/getPokemon";

export const usePokemon = ( numberPage ) => {

    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getInfoPokemon = async() => {
        const newPokemon = await getPokemon( numberPage );
        setPokemon(newPokemon);
        setIsLoading(false);
    }
  
    useEffect( () => {
        getInfoPokemon();
    }, [numberPage])

    return{
        pokemon,
        isLoading
    }

}
