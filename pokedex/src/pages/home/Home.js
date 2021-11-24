import { useNavigate } from "react-router"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Card, CardActions, CardMedia } from "@material-ui/core";
import { useEffect } from "react";
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";




export const Home = () => {

    const navigate = useNavigate()

    const { states, setters, requests } = useContext(GlobalStateContext)



    useEffect(() => {
        requests.getPokemons()
    }, [requests])

    const PokemonCard = () => {
        const mapMatches = states.pokemons.map((pokemon) => {
            return <Card variant="outlined" maxWidth="20vw">
                    <CardMedia component="div" height="200vh">{pokemon.name}</CardMedia>
                    <CardActions>
                        <Button variant="contained" color="secondary" >
                            Adicionar
                        </Button>
                        <Button variant="contained" color="secondary" >
                            Ver Detalhes
                        </Button>
                </CardActions>
            </Card>
        })
        return mapMatches
    }

    return(
        <Container maxWidth="100vw"> 
            <header>
               <h1>Home</h1> 
                <Button variant="contained" color="secondary" onClick={() => navigate("/pokedex")}>
                   Ver minha Pokedex
                </Button>
            </header>

            <PokemonCard />

            
            <Button variant="contained" color="secondary" onClick={() => navigate("/pokedex")}>
                Pokedex
            </Button>
            <Button variant="contained" color="secondary" onClick={() => navigate("/details")}>
                Detalhes
            </Button>

        </Container>
        
    )
}