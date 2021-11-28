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
    
    @media(max-width: 768px) {
        height: 80vh;
        width: 40vw;
    }

    @media(max-width: 426px) {
        width: 80vw;
    }
`

export const PokeCardButtonsContainer = styled.div` 
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
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
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 2%;

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 424px) {
        grid-template-columns: repeat(1, 1fr);
    }

`

export const Image = styled.img` 
    height: 80%;
    width: 80%;
`