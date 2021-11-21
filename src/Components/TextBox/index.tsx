import { TextBoxStyle } from './styles';

interface TextProps {
    title: string;
    text: string;
}


export function TextBox(props: TextProps){
    return(
        <>
            
            <TextBoxStyle>
                <h1>{props.title}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh libero, lobortis facilisis enim vitae, aliquet scelerisque libero. Quisque vitae justo sit amet arcu malesuada sollicitudin. Quisque mollis lectus scelerisque imperdiet lobortis. Fusce semper orci leo, quis suscipit tellus aliquam a. Nullam quis luctus risus, quis aliquam urna. Integer sagittis accumsan vehicula. Nunc sit amet rutrum magna, quis lobortis nisl. Curabitur lobortis dolor id nibh auctor ultricies.  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh libero, lobortis facilisis enim vitae, aliquet scelerisque libero. Quisque vitae justo sit amet arcu malesuada sollicitudin. Quisque mollis lectus scelerisque imperdiet lobortis. Fusce semper orci leo, quis suscipit tellus aliquam a. Nullam quis luctus risus, quis aliquam urna. Integer sagittis accumsan vehicula. Nunc sit amet rutrum magna, quis lobortis nisl. Curabitur lobortis dolor id nibh auctor ultricies.  
                </p>

                <hr />
            </TextBoxStyle>
        </>
    );
}