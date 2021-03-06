import headerImg from '../../assets/bg_tst1.png';
import downImg from '../../assets/Setas.png';

import { TopHomeStyle } from './styles';

import { Header } from '../Header';
import { Button } from '../Button';
import { Biografia } from '../Bio';
import { Cards } from '../Cards';
import { Footer } from '../Footer';

export function Home(){
    return(
        <>
            <Header />
            <TopHomeStyle>
                    <img src={headerImg} alt="Background" className="bg" />

                    <div className="left-text">
                        <h1>
                            Olá <br />
                            Me chamo Vinicius
                        </h1>
                        <p>
                            Estou no primeiro período do curso de Ciência da Computação da PUC Minas <br />
                            do Campus de Poços de Caldas.
                        </p>
                        <Button />


                        <a href="#bio" className="linkButton">
                            <img src={downImg} alt="Setas Baixo"/>
                        </a>
                    </div>
                    
            </TopHomeStyle>
            <Biografia />
            <Cards />
            <Footer />
       </>
       
    );
}