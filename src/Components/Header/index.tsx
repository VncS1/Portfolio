import { HeaderContainer} from "./styles";

import logoImg from '../../assets/logo.png';
import menuImg from '../../assets/menu_icon.png';

export function Header(){
    return(
        <>
            <HeaderContainer>
                <img src={logoImg} alt="logo"/>
                <ul>
                    <li>
                        <a href="https://https://portfolio-vinicius.vercel.app/">Informações Pessoais</a>
                    </li>
                    <li>
                        <a href="https://https://portfolio-vinicius.vercel.app/">Acontecimentos</a>
                    </li>
                    <li>
                        <a href="https://https://portfolio-vinicius.vercel.app/">Opiniões</a>
                    </li>
                </ul>

                <button type="button">
                    <img src={menuImg} alt="Icone Menu" className="icon-menu"/>
                </button>

                
            </HeaderContainer>
        </>
        
    );
}