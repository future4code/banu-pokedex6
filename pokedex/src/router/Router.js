import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Details } from "../pages/Details"
import { Home } from "../pages/home/Home"
import PokedexPage from "../pages/PokedexPage/Pokedex"





export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pokedex" element={<PokedexPage />} />
            <Route exact path="/details" element={<Details />} />

        </Routes>
        
        </BrowserRouter>
    )
}