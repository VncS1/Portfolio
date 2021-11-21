import { TextBox } from '../TextBox';

import { Header } from '../Header';
import { Footer } from '../Footer';

import { BiographyStyle } from './styles';


export function Biography(){
    return(
        <>
            <Header />
            <BiographyStyle>
                <TextBox title="Semana 11/10 até 11/12" text=""/>
                <TextBox title="Semana 11/10 até 11/12" text=""/>
                <TextBox title="Semana 11/10 até 11/12" text=""/>
            </BiographyStyle>
            <Footer />
        </>
    );
}