import  styled from "styled-components";

export const PokeCard = styled.div`
    height: 55vh;
    width: 20vw;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3%;
    padding-bottom: 2%;
    text-transform: capitalize;
`

export const PokeCardButtonsContainer = styled.div` 
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;

    

`

export const Header = styled.header `
    display: flex;
    justify-content: space-between;
    padding: 1%;
    border-bottom: 3px solid black;
    margin: 0;
    background-color: black;
    color: white;
`

export const GenericContainer = styled.div` 
    max-width: 100vw;

`

export const PokeCardsContainer = styled.div` 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 2%;

`

export const Image = styled.img` 
    height: 80%;
    width: 80%;
`