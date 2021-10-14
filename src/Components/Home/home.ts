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

        padding: 1rem 4rem;

        h1 {
            font-size: 5rem;
            font-family: 'Monteserrat', sans-serif;
            
            background-image: linear-gradient(to bottom, #2682cf, #2682cf, #2682cf, #2682cf, #a57de6, #7a4bc8);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        p {
            font-size: 1.3rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            margin-bottom: 1.5rem;
            margin-top: 0.5rem;

            text-shadow: 2px 2px 5px rgba(255,255,255,0.5);
        }
        
        img.bg {
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100vh;

            object-fit: cover;
            z-index: -1;
        }

        Button {
            /* margin-left: 3.5rem; */
            margin-bottom: 14rem;
            transition: 0.5s;

            &:hover {
                background-color: #7a4bc8;
            }
        }

        a.linkButton {
            width: 5rem;
            height: 4rem;

            margin: 0 auto;

            position: relative;
            top: 0;
        }
        
    }
`;