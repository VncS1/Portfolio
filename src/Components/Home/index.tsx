import headerImg from '../../assets/bg_tst1.png';
import downImg from '../../assets/Setas.png';

import { TopHomeStyle } from './styles';
import { Button } from '../Button';
import { Biografia } from '../Bio';


export function Home(){
    return(
        <>
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


                        <a href="https://portfolio-vinicius.vercel.app/" className="linkButton">
                            <img src={downImg} alt="Setas Baixo"/>
                        </a>
                    </div>
                    
            </TopHomeStyle>
            <Biografia/>
            <div>aa</div>
       </>
       
    );
}