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

        button {
          font-size: 1.1rem;
          width: 80%;
          height: 3.3rem;
          margin: 0 auto;
            
        }
    }

    

    @media(max-width: 768px){
        width: 70%;
        height: auto;
        padding-bottom: 2rem;

        

        p {
            padding: 5rem;
        }

        button {
            width: 75%;
            height: 6rem;
            font-size: 1rem;
        }
        
    }
`;