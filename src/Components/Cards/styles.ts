import styled from 'styled-components';

import Bg from '../../assets/Header_Bg.jpg';

export const CardsStyle = styled.div`
    position: relative;

    width: 100%;
    height: auto;
    padding: 5rem 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10rem;

    background-image: url(${Bg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
/* 
    img.background-area {
        width: 100%;
        

        position: fixed;
        top: 0;
        left: 0;
        
        object-fit: cover;
        z-index: -1;
    } */

    
    @media(max-width: 768px){
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }

    @media(min-width: 769px) and (max-width: 1440px) {
        gap: 3rem;
        padding: 4rem;
    }
`;