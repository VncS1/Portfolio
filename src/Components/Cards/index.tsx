import { Card } from '../Card';
import { CardsStyle} from './styles'
import Bg from '../../assets/Header_Bg.jpg';


export function Cards(){
    return(
        <CardsStyle>
            
            <img src={Bg} alt="Background" className="background-area" />
            <Card />
            <Card />
        </CardsStyle>
    );
}