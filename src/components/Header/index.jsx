import { FaInstagram, FaPhoneAlt,FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import * as C from './style'

import logoWhite from '../../assets/logoWhite.png'
import { theme } from '../../styles/theme'
import Button from '../Button'

function Header() {
  return (
    <C.Container>
      <C.Image>
        <img src={logoWhite} />
      </C.Image>
      <C.HeaderContent>
        <C.HeaderInfo>
          <C.Info>
            <div>
              <FaPhoneAlt color={theme.colors.white} target="blank" size={20} />
              <a href="tel:+551145441507" target="blank">
                (11)4544-1507
              </a>
              <FaPhoneAlt
                color={theme.colors.white}
                target="blank" 
                size={20}
                marginRight={0}
              />
              <a href="tel:+551145441075" target="blank">
                (11)4544-1075
              </a>
            </div>
            <div>
              <MdOutlineEmail
                href="mailto: acibecorte@acibecorte.com.br"
                target="blank"
                color={theme.colors.white}
                size={30}
              />
              <a href="mailto: acibecorte@acibecorte.com.br" target="blank">
                acibecorte@acibecorte.com.br
              </a>
            </div>
          </C.Info>
          <C.Icons>
            <FaInstagram
              href="https://www.instagram.com/acibecorte/"
              target="blank"
              color={theme.colors.white}
              size={50}
              marginRight={16}
            />
            <FaWhatsapp 
            href = "https://wa.me/551145441075" 
            target="blank" 
            color={theme.colors.white}
            size={50}
            />
          </C.Icons>
        </C.HeaderInfo>
        <C.HeaderMenu>
          <div className="menu">
            <a href="">HOME</a>
            <a href=""> SERVIÇOS</a>
            <a href=""> EMPRESA</a>
            <a href=""> MISSÃO</a>
            <a href=""> CONTATO</a>
          </div>
          <div className="button">
            <Button title="Solicite um Orçamento " marginTop={24} />
          </div>
        </C.HeaderMenu>
      </C.HeaderContent>
    </C.Container>
  )
}

export default Header
