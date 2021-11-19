import { useNavigate } from "react-router"
import Button from '@material-ui/core/Button';

export const Home = () => {

    const navigate = useNavigate()

    return(
        <div> 
            <h1>Home</h1>

            {/*Botões para teste*/}
            <Button variant="contained" color="primary" onClick={() => navigate("/pokedex")}>
                Pokedex
            </Button>
            <Button variant="contained" color="secondary" onClick={() => navigate("/details")}>
                Detalhes
            </Button>

        </div>
        
    )
}