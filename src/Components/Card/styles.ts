import styled from 'styled-components';


export const CardStyle = styled.div `
    width: 27%;
    height: auto;

    background-color: var(--card-purple);

    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 3rem;

   
    


    img {
        object-fit: cover;
        width: 100%;
    }

    .texto {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;

        h1 {
            padding: 0 3rem;
        }

        p {
            font-size: 19px;
            padding: 0rem 3rem 1rem;
            text-align: left;
        }

        .link {
          margin: 0 auto !important;
          width: 80%;
          
          

          button {
            font-size: 1.2rem;
            height: 3.3rem;
            
          }
            
        }
    }

    

    @media(max-width: 768px){
        width: 80%;
        height: auto;
        padding-bottom: 2rem;

        
        p {
            padding: 0;
            width: 90%;
        }

        h1 {
            font-size: 1.7rem;
        }
      
        .link {
            button {
                width: 17rem;
                font-size: 2rem;
            }
        }
        
    }

    @media (min-width: 769px) and (max-width: 1440px){
        width: 80%;
    }
`;