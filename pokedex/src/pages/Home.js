import { useNavigate } from "react-router"





export const Home = () => {

    const navigate = useNavigate()

    return(
        <div> 
            <h1>Home</h1>

            {/*Botões para teste*/}
            
            <button onClick={() => {navigate("/pokedex")}}>Pokedex</button>
            <button onClick={() => {navigate("/details")}}>Details</button>

        </div>
        
    )
}