import { useParams } from "react-router";
import GlobalStateContext from "../global/GlobalStateContext";
import { useContext, useEffect } from "react";


export const Details = () => {

    const params = useParams()

    const { states, requests  } = useContext(GlobalStateContext)
    
    useEffect(() => {
        requests.getPokemonDetails(params.name)
        console.log(states.pokemonDetails)

    }, [])


    return(
      <h1>Details</h1>

    )
}