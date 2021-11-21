import { TextBox } from '../TextBox';
import { Header } from '../Header';
import { Footer } from '../Footer';

import { EventsStyle } from './styles';

export function Events(){
    return(
        <>
            <Header />
            <EventsStyle>
                <TextBox title="Semana 11/10 até 11/12" text=""/>
                <TextBox title="Semana 11/10 até 11/12" text=""/>
            </EventsStyle>
            <Footer />
        </>
    );
}