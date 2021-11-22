import { TextBox } from '../TextBox';
import { Header } from '../Header';
import { Footer } from '../Footer';

import { OpinionsStyle } from './styles';

export function Opinions(){
    return(
        <>
            <Header />
            <OpinionsStyle>
                <TextBox title="Opiniões e atualizações.">
                    <p>Em andamento...</p>
                </TextBox>
            </OpinionsStyle>
            <Footer />
        </>
    );
}