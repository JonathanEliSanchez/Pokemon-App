import { ItemPokemon } from "./ItemPokemon";

export const PokemonPerType = (tipo) => {

    //getDataPokemonPerType(tipo);
    


  return (
    <>
    
      <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid ">
              <ItemPokemon
              key={tipo.url}
              {...tipo}
              />
      </div>   

 
    </>
    
  )
}
