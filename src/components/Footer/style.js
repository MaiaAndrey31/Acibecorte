import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`

  min-height: 30vh;
  background-color: ${theme.colors.black};
  width: 100%;
  h1, h3, p{
    color: ${theme.colors.white};
  }

  .contentFooter {
    display: grid;
  grid-template-columns: 1fr 1fr 1fr 2.5fr;
  grid-gap: 1.5rem;
  align-content: center;
  justify-items: center;
  padding: 3rem 2rem;
  }
`



export const Sobre = styled.div`

`

export const Servicos = styled.div``

export const Social = styled.div``

export const Endereco = styled.div`
display: flex;
width:100%;
gap: 2rem;

.maps {
   
    min-width: 50%;
    min-height:50%;
}
`

export const Copy = styled.div`
height: 4rem;
width: 100%;
/* background-color: ${theme.colors.dark}; */
background-color: #0f0f6edc;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.125rem;
`
