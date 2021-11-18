import styled from 'styled-components';



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

    img.background-area {
        width: 100%;
        height: inherit;

        position: fixed;
        top: 0;
        left: 0;
        
        object-fit: cover;
        z-index: -1;
    }

    
    @media(max-width: 768px){
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }
`;