import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
        --background: #333;
        --dark-purple: #7a4bc8;
        --blue-degrade: #2682cf;
        --light-purple: #a57de6;
        --card-purple: #1c1b29;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #fff;
    }

    //Tamanho padrão fonte: 16px (Desktop)
    html {
        @media(max-width: 1080){
            font-size: 93.75%;
        }

        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;    
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;