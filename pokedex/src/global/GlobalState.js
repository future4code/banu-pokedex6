import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import axios from "axios";


const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([]) 
    const [pokemonDetails, setPokemonDetails] = useState([])

  
 
    const getPokemons = () => {
        axios.get(BASE_URL)
        .then((response) => setPokemons(response.data.results))
        .catch((error) => console.log(error.message))
    }

    const getPokemonDetails = (name) => {
        axios.get(`${BASE_URL}/${name}`)
        .then((response) => {
            setPokemonDetails(response.data)
        })
        .catch((error) => console.log(error.message))
    }


    const addPokedex = (newPokemon) => {
        let alerta = false
        for (let i = 0; i < pokedex.length; i++) {
            if(newPokemon.name === pokedex[i].name) {
                alerta = true
            }
        }
            
        alerta === false ? changePokedex(newPokemon) : alert('Você já possui este pokemon.')
    }

    const changePokedex = (newPokemon) => {
        let newPokedex = [...pokedex, newPokemon]
        setPokedex(newPokedex)
        removePokemonList(newPokemon) 
    } 

    const removePokemonList = (retirarPokemon) => {
        let novaLista = []
        for (let i = 0; i < pokemons.length; i++) {
            if(pokemons[i] !== retirarPokemon) novaLista.push(pokemons[i])            
        }
        setPokemons(novaLista)
    
    } 
    const removePokemonPokedex = (poke) => {
        let removePoke = []
        for (let i = 0; i < pokedex.length; i++) {
            if (pokedex[i] !== poke) removePoke.push(pokedex[i])
        }
        setPokedex(removePoke)
    }

    const states = { pokemons, pokemonDetails,  }
    const setters = { setPokemons, setPokemonDetails,  }
    const requests = { getPokemons,  getPokemonDetails,  }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests, pokedex, addPokedex, removePokemonPokedex }} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;