import React, {  useEffect, useState } from 'react';
import { useDataPerTypePokemon } from '../hooks/useDataPerTypePokemon';
import { useTiposPokemon } from '../hooks/useTiposPokemon';
import { ItemPokemon } from './ItemPokemon';
import { PokemonPerType } from './PokemonPerType';

export const TypesPokemon = () => {
    //obtener la lista de los tipos
    const { pokemonTipos, isLoading } = useTiposPokemon();
    
    //capturar el tipo que le dio click
    const [tipo, setTipo] = useState();
    
    //obtener la lista de los pokemon por tipo

      const {pokemon} = useDataPerTypePokemon(tipo);
    
    

  return (
    <>
    <div className='container-fluid'>
        <div className=' className="d-grid gap-2 d-md-flex justify-content-md-end espacio botones'>
            {
            pokemonTipos.map((pokemon) => (
                <button  
                    id={pokemon.url} 
                    className={`space ${pokemon.name}`} 
                    onClick={( event ) => {setTipo(event.target.id)}} 
                    key={pokemon.name}>{pokemon.name}
                </button> 
                
            ))}
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid ">
        {
                pokemon.map((poke)=>(
                  <ItemPokemon 
                    key={poke.url} 
                    {...poke} 
                  />
                ))
        }
          </div>

             
 

    </div>
        
    </>
  )
}
