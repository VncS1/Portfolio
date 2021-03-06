import styled from 'styled-components';

export const ButtonStyle = styled.button`
        width: 20rem;
        height: 3.25rem;

        border: 2px solid #9766e8;
        border-radius: 2rem;
        background-color: #9766e8;
        padding: 0.5rem 3rem;


        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 1.4rem;

        transition: 0.5s;

        &:hover {
            background-color: #7a4bc8;
            border: 2px solid #7a4bc8;
            width: 20.5rem;
            height: 3.5rem;
        }

        a{
            color: #fff;
            text-decoration: none;
        }
`;

