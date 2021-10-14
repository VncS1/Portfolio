import styled from 'styled-components';

export const HeaderContainer = styled.header `
    position: absolute;
    overflow: hidden;
    padding: 0 0.5rem;
    width: 100%;

    display: flex;

    img {
        width: 4.5rem;
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
        list-style: none;
        font-weight: 500;
        padding-right: 3rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
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

// export const Container = styled.section `
//     width: 100%;
//     height: 100vh;
//     background: #333 url(${HeaderImg}) no-repeat;
//     background-size: 100% 100%;
// `;