import * as C from './style'
import Forms from '../../components/Formulario'

function Contact(){
    return(
        <C.Container>
            
                <C.infoContact>
                <h1>CONTATO</h1>
                <Forms />
                {/* <h3>Telefone: (11)4544-1507 ou (11)4544-1075</h3> */}
                </C.infoContact>
               
            
        </C.Container>
    )
}

export default Contact