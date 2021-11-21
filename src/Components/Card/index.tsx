import { CardStyle } from './styles';
import { Button } from '../Button';

import cardBg from '../../assets/Card_Bg.png';

import { Link } from 'react-router-dom';

interface cardInfos {
    title: string;
    text: string;
    route: string;
}

export function Card(props: cardInfos){
    return(
        <CardStyle>
                <img src={cardBg} alt="Card Background" />
                
                <div className="texto">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <Link to={props.route} className="link"><Button /></Link>
                </div>

                
        </CardStyle>
    );
}