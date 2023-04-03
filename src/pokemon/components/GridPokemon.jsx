import React, { useState } from 'react'
import { usePokemon } from '../hooks/usePokemon'
import { ItemPokemon } from './ItemPokemon';

export const GridPokemon = () => {
  const [numberPage, setNumberPage] = useState(0)
  
  const {pokemon, isLoading} = usePokemon(numberPage);


  const prevPage = () =>{
    if(numberPage<=0)return;
    setNumberPage(numberPage-10);
  }
  const nextPage = () => {
    setNumberPage(numberPage+10)
    
  }
  console.log('lista ',(numberPage/10)+1);
  return (
    <>

   
    <div className='container-fluid'>
          {
              isLoading && ( <h2>Cargando...</h2> )
          }

        <div className="d-grid gap-2 d-md-flex justify-content-md-end espacio">
          <button className="btn btn-primary me-md-2" type="button" onClick={(prevPage)}>Atras</button>
          <button className="btn btn-primary me-md-2" type="button" onClick={(nextPage)}>Siguiente</button>
          
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
