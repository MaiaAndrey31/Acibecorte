import { FaInstagram } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

import {
  Container,
  Image,
  HeaderContent,
  HeaderInfo,
  HeaderMenu,
  Info,
  Icons
} from './style'
import logoWhite from '../../assets/logoWhite.png'
import { theme } from '../../styles/theme'
import Button from '../Button'
function Header() {
  return (
    <Container>
      <Image>
        <img src={logoWhite} />
      </Image>
      <HeaderContent>
        <HeaderInfo>
          <Info>
            <div>
              <FaPhoneAlt color={theme.colors.white} target="blank" size={25} />
              <a href="tel:+551145441507" target="blank">
                (11)4544-1507
              </a>
              <FaPhoneAlt
                color={theme.colors.white}
                target="blank" 
                size={25}
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
                size={25}
              />
              <a href="mailto: acibecorte@acibecorte.com.br" target="blank">
                acibecorte@acibecorte.com.br
              </a>
            </div>
          </Info>
          <Icons>
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
          </Icons>
        </HeaderInfo>
        <HeaderMenu>
          <div className="menu">
            <a href="">HOME</a>
            <a href=""> SERVIÇOS</a>
            <a href=""> EMPRESA</a>
            <a href=""> FAQ</a>
            <a href=""> CONTATO</a>
          </div>
          <div className="button">
            <Button title="Solicite um Orçamento " marginTop={24} />
          </div>
        </HeaderMenu>
      </HeaderContent>
    </Container>
  )
}

export default Header
