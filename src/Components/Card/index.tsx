import { CardStyle } from './styles';
import { Button } from '../Button';

import cardBg from '../../assets/Card_Bg.png';

export function Card(){
    return(
        <CardStyle>
                <img src={cardBg} alt="Card Background" />
                
                <div className="texto">
                    <h1>Titulo</h1>
                    <p>aaaaaa aaaaaa aaaa aaaaaaaa aaaaaa aaaa aaaa a a a aaaaaaa  aaaaaaa</p>
                    <Button />
                </div>

                
        </CardStyle>
    );
}