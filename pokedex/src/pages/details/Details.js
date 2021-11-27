import { useParams } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext, useEffect } from "react";
import { StatsContainer, TypeContainer, Header, GenericContainer, MovesContainer, Image, ImageContainer } from "./styled";
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router";



export const Details = () => {

    const params = useParams()
    const navigate = useNavigate()


    const { states, requests  } = useContext(GlobalStateContext)
    
    useEffect(() => {
      requests.getPokemonDetails(params.name)
    }, [params])

    const getDetails = () => {
      if (states.pokemonDetails.length === 0){
        return <p>Loading...</p>
      } else {
        return <div>
              <ImageContainer>
                <Image src={states.pokemonDetails.sprites.front_default}/>
                <Image src={states.pokemonDetails.sprites.back_default}/>
              </ImageContainer>
              
              <StatsContainer>
                <p>Stats</p>
                {states.pokemonDetails.stats.map((stat)=>{
                  return<p>{stat.stat.name}: {stat.base_stat}</p>
                })}
              </StatsContainer>
              <TypeContainer>
                <p>Types</p>
                {states.pokemonDetails.types.map((type) => {
                  return <p>{type.type.name}</p>
                })}
              </TypeContainer>
              <MovesContainer>
              <p>Moves</p>
              {states.pokemonDetails.moves.map((move) => {
                  return <p>{move.move.name}</p>
                })}
              </MovesContainer>
            </div>
      }
    }


    
    return(
      <GenericContainer> 
        {console.log(states.pokemonDetails) }
        <Header>
          <h1>Lista de Pokemons</h1> 
          <Button variant="contained" color="primary" onClick={() => navigate("/pokedex")}>
            Pokedex
          </Button>
        </Header>
        {getDetails()}
      </GenericContainer> 

    )
}