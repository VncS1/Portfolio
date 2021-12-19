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
                    <p>
                        Até o momento estou gostando muito de tudo que a PUC tem a oferecer. Os professores são muito bons, nas aulas eu consigo entender praticamente
                        tudo que é passado, e quando não entendo, posso fazer a pergunta sem medo, pois eles sempre respondem com a maior paciência do mundo, não importa
                        quantas vezes seja feita uma pergunta. <br /><br />

                        As aulas também são muito boas, sempre bem organizadas, no horário correto, e com uma ótima apresentação do conteúdo da disciplina.<br/><br/>

                        Então até o momento, mesmo sendo EAD, eu estou gostando de tudo que a PUC tem nos oferecido. :D
                    </p>
                </TextBox>
            </OpinionsStyle>
            <Footer />
        </>
    );
}