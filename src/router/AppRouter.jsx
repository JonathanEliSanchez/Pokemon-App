import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import {  PokemonRoutes } from "../pokemon"

import { Navbar } from "../ui"

export const AppRouter = () => {
  return (
   <>
       <Routes>
            <Route path="login" element={<LoginPage/> } />
            <Route path="/*" element={<PokemonRoutes/> } />
        </Routes>
   </>



  )
}
