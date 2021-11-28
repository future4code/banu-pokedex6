import { useNavigate } from "react-router"
import Button from '@material-ui/core/Button';
import { useEffect, useContext} from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { PokeCard, PokeCardButtonsContainer, Header, GenericContainer, PokeCardsContainer, Image } from "./styled";




export const Home = () => {

    const navigate = useNavigate()



    const { states, requests, addPokedex  } = useContext(GlobalStateContext)


    useEffect(() => {
        requests.getPokemons();
    }, [])


    const pokeMap = states.pokeImage.map((pokemon) => {
        return (<PokeCard  key={pokemon.name}>
                    <Image src={pokemon.img} />                        
                    <PokeCardButtonsContainer>
                        <Button variant="contained" color="secondary" onClick={() => addPokedex(pokemon)}>
                            Adicionar
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => navigate(`/details/${pokemon.name}`)}>
                            Ver Detalhes
                        </Button>
                </PokeCardButtonsContainer>
            </PokeCard>)
    
    })  

    
    console.log(states.pokeImage)
    return(
        <GenericContainer> 
            <Header>
               <h1>Lista de Pokemons</h1> 
                <Button variant="contained" color="primary" onClick={() => navigate("/pokedex")}>
                  Pokedex
                </Button>
            </Header>
            <PokeCardsContainer> 
                { states.pokeImage === [] ?  <p> Loading... </p> : pokeMap }
            </PokeCardsContainer>

        </GenericContainer>
        
    )
}