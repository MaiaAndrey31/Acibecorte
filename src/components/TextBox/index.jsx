import * as C from './style'
import { FaWhatsapp } from 'react-icons/fa'

function TextBox({ title, content }) {
  return (
    <C.Container>
      <h1>{title}</h1>
      <p>{content}</p>
      <a href="https://wa.me/551145441075" target="blank">
        <C.ButtonIcon>
            <h5>Iniciar Conversa</h5>
          <FaWhatsapp className='icon'  />
        </C.ButtonIcon>
      </a>
    </C.Container>
  )
}

export default TextBox
