import { TextBoxStyle } from './styles';

type TextProps = any & {
    title: string;
    text: string;
}


export function TextBox({ title, text, ...props }: TextProps){
    return(
        <>
            
            <TextBoxStyle>
                <h1>{title}</h1>
                {props.children}

                <hr />
            </TextBoxStyle>
        </>
    );
}