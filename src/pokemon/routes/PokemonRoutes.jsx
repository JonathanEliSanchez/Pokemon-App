import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { HomePage, PokemonPage, SearchPage, TypesPage } from '../pages';
import { PokeInfoPage } from '../pages/PokeInfoPage';

export const PokemonRoutes = () => {
  return (
    <>
      <Navbar/>
     
     
           <Routes>
                <Route path="home" element={<HomePage /> } />
                <Route path="pokemon" element={<PokemonPage /> } />
                <Route path="types" element={<TypesPage /> } />
                <Route path="search" element={<SearchPage /> } />
                <Route path="info/:id" element={<PokeInfoPage /> } />


                <Route path="/" element={<Navigate to = "/home"/> } />
          </Routes>
       

    </>

  )
}
