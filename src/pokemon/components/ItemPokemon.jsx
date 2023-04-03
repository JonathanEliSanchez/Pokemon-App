import React, { useState } from 'react'
import { useDataPokemon } from '../hooks/useDataPokemon';
import {Link} from 'react-router-dom';

export const ItemPokemon = ({url}) => {
 const [id, setID] = useState(0);
 const {pokemonData} = useDataPokemon(url);
 const tipos =(pokemonData.tipo);
 //console.log(tipos);
//  const getId = ({target}) => {
//   setID(target.id);

//   console.log("target", target.id);
//   //console.log(target.name);
//   console.log(id);

//  }

  return (
  <>
    <div className='col animate__animated animate__fadeIn '>
    <div className={`card h-100 text-center ${pokemonData.tipo1}`} >
      {
        pokemonData.image?
        <img src={pokemonData.image} className={`card-img-top ${pokemonData.tipo1}`} alt={pokemonData.name}/>
        : pokemonData.image2? 
        <img src={pokemonData.image2} className={`card-img-top ${pokemonData.tipo1}`} alt={pokemonData.name}/>
        :<img src={pokemonData.image3} className={`card-img-top ${pokemonData.tipo1}`} alt={pokemonData.name}/>

        
      }
<div className="card-body">
  
  <label className="card-title fw-bold  pokemon-name">&nbsp; &nbsp;{pokemonData.name}&nbsp; &nbsp;</label>
  <div>
  <label className={`card-title f2-bold data-pokemon`}>&nbsp; &nbsp;{pokemonData.tipo1} &nbsp; &nbsp;</label> <label> &nbsp;</label>
    
    {
      pokemonData.tipo2?
      <label className={`card-title f2-bold data-pokemon`} >&nbsp; &nbsp; {pokemonData.tipo2} &nbsp; &nbsp;</label>
      : null
    }
    <br />
    <label className='data-pokemon'>&nbsp; &nbsp;{pokemonData.height}M &nbsp; &nbsp; </label> <label> &nbsp;</label>
    <label className='data-pokemon'>&nbsp; &nbsp;{pokemonData.weight}KG &nbsp; &nbsp;</label><label> &nbsp;</label>
    <br />
   <Link to={`/info/${pokemonData.id}`} >
     Mas...
   </Link>
    
  </div>

  <div className='list-group list-group-flush'>
  </div>

  {/*
                <button id={pokemonData.id}  onClick={(event ) => {setID(event.target.id)}}>Mas informacion</button>
  {
    id?
    <h1>{pokemonData.tipo1} {pokemonData.tipo2}</h1>
    : null
  }

  */}
</div>
<div className='card-footer'>
  <small className='datos'> N.{pokemonData.id}</small>
</div>
</div>

    </div>


    

  </>
  )
}
