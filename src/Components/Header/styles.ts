import styled from 'styled-components';

export const HeaderContainer = styled.header `
    position: relative;
    overflow: hidden;
    padding: 0 0.5rem;
    width: 100%;

    display: flex;

    img {
        width: 4.7rem;
        padding: 0;
    }

    ul {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        justify-content: flex-end;

    }

    li { 
        position: relative;
        list-style: none;
        font-weight: 500;
        padding-right: 3rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.15rem;

        a {
            text-decoration: none;
            transition: 0.2s;
            cursor: pointer;

            &:hover {
                text-shadow: 3px 3px 10px rgba(255, 255,255,0.7);
            }
        }

        
    }

    button {
        display: none;
        border: none;
        background: transparent;

        img {
            width: 100%;
        }

        margin-left: auto;
        padding: 0 1rem;
    }

    @media(max-width: 768px){
        ul {
            display: none;
        }

        button {
            display: block;
        }
    }
`;