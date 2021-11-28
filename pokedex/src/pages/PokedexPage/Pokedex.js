import { useEffect } from 'react';
import { useContext } from "react";
import { useNavigate } from "react-router"
import Button from '@material-ui/core/Button';
import GlobalStateContext from "../../global/GlobalStateContext";
import { PokeCard, PokeCardButtonsContainer, Header, GenericContainer, Image } from "./styled";


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
                    <PokeCard key={i}> 
                        <Image src={poke.img} />
                        <p >{poke.name}</p>

                        <PokeCardButtonsContainer>
                            <Button variant="contained" color="secondary" onClick={() => { removePokemonPokedex(poke) }}>
                                Remover
                            </Button>
                            <Button variant="contained" color="secondary" onClick={() => navigate(`/details/${poke.name}`)}>
                                Ver Detalhes
                            </Button>
                       </PokeCardButtonsContainer>
                    </PokeCard>
                )
            })}</>
        }
    }
    return(
        <GenericContainer>
            <Header>
                <h1>Pokedex</h1>
                <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                    Home
                </Button>
            </Header>
            
            {pokemons()} 
        </GenericContainer>
    )
}

export default PokedexPage