import React from 'react'
import { useForm } from '../../hooks/useForm'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useDataPerNamePokemon } from '../hooks/useDataPerNamePokemon';
import { ItemPokemon } from '../components/ItemPokemon';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse( location.search );
  const {pokemon} =  useDataPerNamePokemon( q );



  const { searchText, onInputChange } = useForm({
    searchText: q

  });



  const onSearchSubmit = (event) =>{
    event.preventDefault();
    if ( searchText.trim().length <=2 ) return;

   navigate(`?q=${searchText.toLowerCase().trim()}`);

  }
  return (
    <>
    <h1>Search</h1>
    <hr />
    <div className='row'>
      <div className='col-5'>
        <h4>Searching</h4>
        <hr />
        <form onSubmit={ onSearchSubmit }>
          <input 
            type="text"
            placeholder='Search a Pokemon'
            className='form-control'
            name='searchText'
            autoComplete='off'
            value={searchText}
            onChange={onInputChange}
          />

          <button className='btn btn-outline-primary mt-1'>
            Search
          </button>
        </form>
      </div>

      <div className='col-7'>
        <h4>Results</h4>
        <hr />
        {
          (q==='')
          ?<div className='alert alert-primary'>Search a Pokemon </div>
          :  ( Object.entries(pokemon).length === 0 )
          && <div className='alert alert-danger'>No Pokemon with <b>{q}</b> </div>
        }

        {
          
        ( Object.entries(pokemon).length === 0 )

         ?null
         :
          <div>
              <div className='col-4'>
                <img 
                  src={pokemon.image3}
                  alt={pokemon.name}
                  className='img-thumbnail'
                />
              </div>
              <div className='col-7'>
                  <h3>{pokemon.name}</h3>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b>Nombre:</b> {pokemon.name} </li>
                    <li className='list-group-item'> <b>Height:</b> {pokemon.height} </li>
                    <li className='list-group-item'> <b>Weight:</b> {pokemon.weight} </li>
                    <Link to={`/info/${pokemon.id}`} >
                      Mas...
                    </Link>
                    <br />
                  </ul>
                  <br />
              </div>
          </div>
        }
    </div>

    </div>
    </>
  )
}
