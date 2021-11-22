import { Card } from '../Card';
import { CardsStyle} from './styles'



export function Cards(){
    return(
        <CardsStyle id="card">
            
            {/* <img src={Bg} alt="Background" className="background-area" /> */}
            <Card route="/events" title="Acontecimentos" text="Acontecimentos que ocorreram durante o semestre letivo."/>
            <Card route="/opinions" title="Opiniões" text="Algumas opiniões e desabafos sobre o andamento do curso."/>
        </CardsStyle>
    );
}