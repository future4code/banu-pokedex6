import { useNavigate, useParams } from "react-router"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useEffect} from "react";
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { PokeCard, PokeCardButtonsContainer } from "./styled";







export const Home = () => {

    const navigate = useNavigate()


    const { states, requests, addPokedex, pokedex,  } = useContext(GlobalStateContext)


    useEffect(() => {
        requests.getPokemons()

    }, [pokedex])
   
    const getImage = (url) => {
        
    }



    const PokemonCard = () => {
        const mapPokemons = states.pokemons && states.pokemons.map((pokemon) => {


            return <PokeCard  key={pokemon.name}>
                    <p>{pokemon.name}</p>
                    {getImage(pokemon.url)}
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
        <Container maxWidth="100vw"> 
            <header>
               <h1>Home</h1> 
                <Button variant="contained" color="primary" onClick={() => navigate("/pokedex")}>
                   Ver minha Pokedex
                </Button>
            </header>

            <PokemonCard />
            
            <Button variant="contained" color="secondary" onClick={() => navigate("/pokedex")}>
                Pokedex
            </Button>

        </Container>
        
    )
}