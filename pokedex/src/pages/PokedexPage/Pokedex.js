import { useEffect } from 'react';
import { useContext } from "react";
import { useNavigate } from "react-router"
import Button from '@material-ui/core/Button';
import GlobalStateContext from "../../global/GlobalStateContext";

const PokedexPage = () => {
    const { pokedex, removePokemonPokedex } = useContext(GlobalStateContext)
    
    useEffect(() => {
        pokemons()
    },[])

    const navigate = useNavigate()

    const pokemons = () => {
        if(pokedex === undefined) {
            return <p>Você não capturou nenhum pokemon.</p>
        } else {
            return <>{pokedex.map((poke, i) => {
                return (
                    <div key={i}> 
                        <p >{poke.name}</p>
                        <Button variant="contained" color="secondary" onClick={() => { removePokemonPokedex(poke) }}>
                            Remover
                        </Button>
                        <Button variant="contained" color="secondary" >
                            Ver Detalhes
                        </Button>
                    </div>
                )
            })}</>
        }
    }
    return(
        <>
            <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                Home
            </Button>
            <h1>Pokedex</h1>
            {pokemons()} 
        </>
    )
}

export default PokedexPage