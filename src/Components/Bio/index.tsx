import { BioStyle } from './styles';
import { Button } from '../Button';

export function Biografia(){
    return(
        <BioStyle>
            <div className="img-box"></div>
            <div className="text-left">
                <h1>Biografia</h1>
                <h2>Algumas informações sobre a minha vida.</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh libero, lobortis facilisis enim vitae, aliquet scelerisque libero. Quisque vitae justo sit amet arcu malesuada sollicitudin. Quisque mollis lectus scelerisque imperdiet lobortis. Fusce semper orci leo, quis suscipit tellus aliquam a. Nullam quis luctus risus, quis aliquam urna. Integer sagittis accumsan vehicula. Nunc sit amet rutrum magna, quis lobortis nisl. Curabitur lobortis dolor id nibh auctor ultricies.  
                </p>
                <Button />
            </div>
        </BioStyle>
    );
}