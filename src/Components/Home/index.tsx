import headerImg from '../../assets/bg_tst1.png';
import { HomeStyle } from './home';
import { Button } from '../Button';


export function Home(){
    return(
       <HomeStyle>
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
                <img src={headerImg} alt="Background" />
            </div>
       </HomeStyle>
    );
}