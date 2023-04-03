import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDataPerIdPokemon } from '../hooks/useDataPerIdPokemon';

export const PokeInfoPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const {pokemon} = useDataPerIdPokemon(id);

    const onNavigateBack = () =>{
      navigate(-1);
    }





    if(id<=0){
      return <>404- Not Found</>
    }
    if(id>=1011){
      return <>404- Not Found</>
    }
    if(pokemon.lengt == 0){
      return <>404- Not Found</>
    }

  return (
    <div className='row mt-5 animate__animated animate__fadeInLeft' >
      <div className='col-4'>
      <h5>Normal</h5>
        <img 
          src={pokemon.image3}
          alt={pokemon.name}
          className='img-thumbnail'
        />
      <h5>Shiny</h5>
        <img 
          src={pokemon.image4}
          alt={pokemon.name}
          className='img-thumbnail'
        />
      </div>
      <div className='col-8'>
        <h3>{pokemon.name}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Nombre:</b> {pokemon.name} </li>
          <li className='list-group-item'> <b>Height:</b> {pokemon.height} </li>
          <li className='list-group-item'> <b>Weight:</b> {pokemon.weight} </li>
          <li className='list-group-item'> <b>Tipo:</b> {pokemon.tipo1} </li>
         {pokemon.tipo2?<li className='list-group-item'> <b>Tipo:</b> {pokemon.tipo2} </li>:null}
          <li className='list-group-item'> <b>HP:</b> {pokemon.statNumber1}  </li>
          <li className='list-group-item'> <b>Attack:</b> {pokemon.statNumber2} </li>
          <li className='list-group-item'> <b>Defense:</b> {pokemon.statNumber3} </li>
          <li className='list-group-item'> <b>Special Attack:</b> {pokemon.statNumber4} </li>
          <li className='list-group-item'> <b>Special Defesen:</b> {pokemon.statNumber5} </li>
          <li className='list-group-item'> <b>Speed:</b>{pokemon.statNumber6} </li>
        </ul>
        <br />
        <button
          className='btn btn-outline-warning'
          onClick={onNavigateBack}
        >Regresar</button>

      </div>

    </div>
  )
}
