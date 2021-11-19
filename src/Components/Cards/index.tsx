import { Card } from '../Card';
import { CardsStyle} from './styles'



export function Cards(){
    return(
        <CardsStyle>
            
            {/* <img src={Bg} alt="Background" className="background-area" /> */}
            <Card />
            <Card />
        </CardsStyle>
    );
}