import styled from 'styled-components';


export const BioStyle = styled.div `
    background-color: #555;

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    padding: 8rem 2rem;

    overflow: hidden;

    font-family: 'Poppins', sans-serif;
    text-align: left;

    .img-box {
        width: 35%;
        height: 85vh;
        background-color: #333;

        box-shadow: 0 0 25px rgba(0,0,0,0.4);
        transition: all 0.5s;

        &:hover {
            transform: scale(1.02,1.02);
        }
    }

    .text-left {
        width: 30%;
        height: 50%;

        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 1fr 1fr 3fr 1fr;
        grid: 1rem;

        p {
            font-size: 17px;
            padding-bottom: 2rem;
        }

        
        h1 {
            color: var(--light-purple);
            font-weight: bold;
            font-size: 50px;
        }
    }

    @media(max-width: 1000px){
        height: auto;

        flex-direction: column;
        justify-content: left;

        padding: 6rem 2rem 0;
        

        .img-box {
            width: 90%;
            height: 50vh;
        }

        .text-left {
            
            width: 90%;
            height: auto;
        }

        p {
            font-size: 16px;
            padding: 1rem 0;
        }

        button {
            font-size: 16px;
            padding: 0.25rem 1.5rem;
            width: 16rem;
        }
    }

`;