import { Card } from '../Card';
import { CardsStyle} from './styles'



export function Cards(){
    return(
        <CardsStyle id="card">
            
            {/* <img src={Bg} alt="Background" className="background-area" /> */}
            <Card route="/events" title="Acontecimentos" text="aaaaaaaaaaa aa aaaaaaaaaaaa aaaaaa aaaaaaaaaa"/>
            <Card route="/opinions" title="Opiniões" text="aaaaaaaaaaa aa aaaaaaaaaaaa aaaaaa aaaaaaaaaa"/>
        </CardsStyle>
    );
}