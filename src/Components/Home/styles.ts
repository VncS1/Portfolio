import styled from 'styled-components';

export const TopHomeStyle = styled.div `
    width: 100%;
    height: 100vh;
    overflow: hidden;

    div.left-text {
        position: relative;
        height: 95vh;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: left;

        padding: 1rem 4rem;

        z-index: 2;

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
            margin-bottom: 1rem;

            color: #eee;

            text-shadow: 2px 2px 5px rgba(255,255,255,0.5);
        }
        
       

        a.linkButton {
            padding-top: 9rem;
        }

        a.linkButton {
            width: 5rem;
            height: 4rem;

            margin: 0 auto;

            position: relative;
            
            @media(max-width:768px){
                top: -4.5rem;
            }

            @media(min-width: 769px) and (max-width: 1024px){
                top: -2.5rem;
            }
        }
        
    }

    img.bg {
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 110vh;

            object-fit: cover;
            z-index: 0;
            
    }
`;