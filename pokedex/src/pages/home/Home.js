import { useNavigate } from "react-router"
import Button from '@material-ui/core/Button';
import { useEffect, useContext} from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { PokeCard, PokeCardButtonsContainer, Header, GenericContainer, PokeCardsContainer } from "./styled";








export const Home = () => {

    const navigate = useNavigate()
 


    const { states, requests, addPokedex, pokedex,  } = useContext(GlobalStateContext)


    useEffect(() => {
        requests.getPokemons()

    }, [pokedex])



    const PokemonCard = () => {
        const mapPokemons = states.pokemons && states.pokemons.map((pokemon) => {


            return <PokeCard  key={pokemon.name}>
                    <p>{pokemon.name}</p>
                    
                    <PokeCardButtonsContainer>
                        <Button variant="contained" color="secondary" onClick={() => addPokedex(pokemon)}>
                            Adicionar
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => navigate(`/details/${pokemon.name}`)}>
                            Ver Detalhes
                        </Button>
                </PokeCardButtonsContainer>
            </PokeCard>
        })
        return mapPokemons
    }


    return(
        <GenericContainer> 
            <Header>
               <h1>Home</h1> 
                <Button variant="contained" color="primary" onClick={() => navigate("/pokedex")}>
                   Ver minha Pokedex
                </Button>
            </Header>
            <PokeCardsContainer> 
                <PokemonCard />
            </PokeCardsContainer>

        </GenericContainer>
        
    )
}