import { HeaderContainer} from "./styles";

import logoImg from '../../assets/logo.png';
import menuImg from '../../assets/menu_icon.png';

import { Link } from 'react-router-dom';

export function Header(){
    return(
        <>
            <HeaderContainer id="#header">
                <Link to="/"><img src={logoImg} alt="logo"/></Link>
                <ul>
                    <li>
                        <a href="/#bio">Informações Pessoais</a>
                    </li>
                    <li>
                        <a href="/#card">Acontecimentos</a>
                    </li>
                    <li>
                        <a href="/#card">Opiniões</a>
                    </li>
                </ul>

                <button type="button">
                    <img src={menuImg} alt="Icone Menu" className="icon-menu"/>
                </button>

                
            </HeaderContainer>
        </>
        
    );
}