import styled from 'styled-components';


export const BioStyle = styled.div `
    background-color: #eee;

    width: 100%;
    height: 140vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    padding: 4rem;

    overflow: hidden;

    font-family: 'Poppins', sans-serif;
    text-align: left;

    .img-box {
        width: 35%;
        height: 80%;
        background-color: #333;

        box-shadow: 0 0 25px rgba(0,0,0,0.2);
        transition: all 0.5s;

        &:hover {
            transform: scale(1.02,1.02);
        }
    }

    .text-left {
        width: 50%;
        height: 50%;

        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 1fr 1fr 3fr 1fr;

        p {
            font-size: 17px;

        }

        
        h1 {
            color: var(--light-purple);
            font-weight: bold;
            font-size: 50px;
        }
    }

    @media(max-width: 1000px){
        height: 150vh;

        flex-direction: column;
        justify-content: left;
        

        .img-box {
            width: 80%
        }

        .text-left {
            padding: 1rem;
            gap: 1rem;
            width: 70%;
        }

        button {
            font-size: 16px;
            padding: 0.25rem 1.5rem;
            width: 16rem;
        }
    }

`;