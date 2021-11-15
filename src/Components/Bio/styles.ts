import styled from 'styled-components';


export const BioStyle = styled.div `
    position: relative;

    height: 120vh;
    width: 100%;
    background-color: #333;

    margin-top: -4.7rem;

    display: flex;
    align-items: center;
    justify-content: center;


    .img-box {
        width: 30%;
        height: 70%;

        background-color: #333;

        box-shadow: 0 0 25px rgba(0,0,0,0.5);

        z-index: 1;
        transition: all 0.5s;

        &:hover {
            transform: scale(1.02,1.02);
        }
    }

    .text-left {
        display: flex;
        align-items: left;
        flex-direction: column;

        font-family: 'Poppins', sans-serif;
        text-align: left;

        background-color: var(--background);

        height: 70%;
        width: 45%;

        padding: 1rem 1rem 1rem 4rem;

        h1 {
            color: var(--light-purple);
            font-weight: bold;
            font-size: 45px;

            /* text-shadow: 2px 2px 2px rgba(255,255,255,1); */
        }

        p {
            word-wrap: break-word;
            line-height: 30px;
            font-size: 16px;
        }
    }


`;