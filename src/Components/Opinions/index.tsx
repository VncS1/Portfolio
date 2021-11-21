import { TextBox } from '../TextBox';
import { Header } from '../Header';
import { Footer } from '../Footer';

import { OpinionsStyle } from './styles';

export function Opinions(){
    return(
        <>
            <Header />
            <OpinionsStyle>
                <TextBox title="Semana 11/10 até 11/12" text=""/>
                <TextBox title="Semana 11/10 até 11/12" text=""/>
            </OpinionsStyle>
            <Footer />
        </>
    );
}