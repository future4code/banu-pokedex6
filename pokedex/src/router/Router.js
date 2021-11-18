import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Details } from "../pages/Details"
import { Home } from "../pages/Home"
import { Pokedex } from "../pages/Pokedex"





export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pokedex" element={<Pokedex />} />
            <Route exact path="/details" element={<Details />} />

        </Routes>
        
        </BrowserRouter>
    )
}