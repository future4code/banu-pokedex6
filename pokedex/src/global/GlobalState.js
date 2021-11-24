import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import axios from "axios";


const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])

    const getPokemons = () => {
        axios.get(BASE_URL)
        .then((response) => setPokemons(response.data.results))
        .catch((error) => console.log(error.message))
    }

    const states = { pokemons }
    const setters = { setPokemons }
    const requests = { getPokemons }
    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;