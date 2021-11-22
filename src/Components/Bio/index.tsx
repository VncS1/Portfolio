import { BioStyle } from './styles';
import { Button } from '../Button';

import { Link } from 'react-router-dom';

export function Biografia(){
    return(
        <BioStyle id="bio">
            <div className="img-box"></div>
            <div className="text-left">
                <h1>Biografia</h1>
                <h2>Algumas informações sobre a minha vida.</h2>
                <p>
                        Bom, me chamo Vinicius Machioni, tenho 19 anos, nascido e criado em Poços de Caldas.<br/> Desde o primeiro ano do ensino
                        fundamental até o 9º ano estudei no Colégio Municipal Dr. José Vargas de Souza, e por descobrir por um amigo sobre o
                        IFSULDEMINAS, fui arriscar fazer a prova mesmo sem ter estudado. <br/>Por sorte eu consegui passar no Curso Técnico em Informática
                        Integrado ao Ensino Médio e estudei todo o meu ensino médio lá no IF...
                </p>
                <Link to="/biography"><Button /></Link>
            </div>
        </BioStyle>
    );
}