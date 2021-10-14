import styled from 'styled-components';

export const HomeStyle = styled.div `
    width: 100%;
    height: 100vh;
    overflow-x: hidden;

    div.left-text {
        height: 100vh;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: left;

        h1 {
            font-size: 4.5rem;
            font-family: 'Monteserrat', sans-serif;
            padding: 0 4rem;
            

            background-image: linear-gradient(to bottom, #2682cf, #2682cf, #2682cf, #2682cf, #a57de6, #7a4bc8);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        p {
            font-size: 1.2rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 300;

            padding: 1rem 4rem;
            margin-bottom: 10rem;

            text-shadow: 2px 2px 5px rgba(255,255,255,0.5);
        }
        
        img {
            position: absolute;
            width: 100%;
            height: 100vh;

            object-fit: cover;
            z-index: -1;
        }

        Button {
            margin-left: 3.5rem;
            margin-bottom: 6rem;
            margin-top: -8rem;
        }
        
    }
`;