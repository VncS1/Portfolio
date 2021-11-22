import { TextBox } from '../TextBox';

import { Header } from '../Header';
import { Footer } from '../Footer';

import { BiographyStyle } from './styles';


export function Biography(){
    return(
        <>
            <Header />
            <BiographyStyle>
                <TextBox title="Biografia Completa">
                    <p>
                        Bom, me chamo Vinicius Machioni, tenho 19 anos, nascido e criado em Poços de Caldas. Desde o primeiro ano do ensino
                        fundamental até o 9º ano estudei no Colégio Municipal Dr. José Vargas de Souza, e por descobrir por um amigo sobre o
                        IFSULDEMINAS, fui arriscar fazer a prova mesmo sem ter estudado. Por sorte eu consegui passar no Curso Técnico em Informática
                        Integrado ao Ensino Médio e estudei todo o meu ensino médio lá no IF. <br /><br />
                        
                        Já no IF, tive o primeiro contato com a programação, começando com a lógica, depois passando para o VisualG, até chegar em C, 
                        quando aprendi sobre variáveis, operadores, estruturas de repetição, etc... Isso tudo no primeiro ano do Ensino Médio.<br /><br />
                        
                        Logo depois, já no segundo ano, começamos a aprender sobre Java, PHP, HTML e CSS, que foi quando eu descobri o que eu realmente
                        gostava e o que eu iria querer seguir carreira. Sempre que tinha algum trabalho relacionado a fazer algum tipo de site, eu sempre 
                        tentava fazer o melhor possível para conseguir estudar mais e mais sobre essa parte de desenvolvimento WEB.<br /><br />

                        E foi no final do segundo ano que consegui um estágio na Prefeitura Municipal de Poços de Caldas, na qual consegui aprender muito e 
                        também fazer muitas amizades.<br /><br />
                        
                        O Terceiro ano foi um pouco pior, pois praticamente foi todo feito durante o EAD, mas ainda assim mantive contato com muitos amigos,
                        que converso até hoje. E na parte de programação não teve muito, pois estavam esperando o retorno presencial (que não ocorreu), então
                        tivemos apenas um pouco de React-Native, mas nada que tenha dado para aprender muita coisa, apenas o básico.<br /><br />
                        
                        Após isso, acabando já o ensino médio, logo em janeiro eu tinha duas preocupações, fazer o ENEM e com o Alistamento Militar.
                        Com o ENEM eu comecei a estudar faltando 2 semanas para o primeiro dia de prova, então fui mais na cara e na coragem, que no final
                        consegui ir muito bem na redação, o que ajudou muito a aumentar minha média.<br /><br />
                        
                        Já sobre o Alistamento Militar, infelizmente fui selecionado, e estou servindo no Tiro de Guerra de Poços de Caldas desde primeiro de março
                        de 2021, e se tudo der certo irá acabar agora no final de novembro.<br /><br />
                        
                        E no meio de todos esses acontecimentos, eu arrisquei jogar minha nota do enem para tentar pegar uma bolsa de 100% no curso de Ciência da Computação (Que
                        estou agora), mas sem muitas esperanças. E se eu não conseguisse, eu ia pegar a bolsa de 50%(Que tinha certeza que ia conseguir) e iria fazer o ENEM novamente
                        para tentar aumentar minha bolsa para 100%. Mas felizmente deu tudo certo, eu consegui a bolsa de 100% e cá estou aproveitando cada momento da faculdade
                        para tentar me tornar um ótimo programador/profissional.
                    </p>
                </TextBox>
                
            </BiographyStyle>
            <Footer />
        </>
    );
}