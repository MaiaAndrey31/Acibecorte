import { Container } from "./style";


function TextBox({title, content}) {

    return (

        <Container>
            <h1>{title}</h1>
            <p>{content}</p>
        </Container>
    )
}

export default TextBox