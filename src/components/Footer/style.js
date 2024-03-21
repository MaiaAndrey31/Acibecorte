import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`

  min-height: 30vh;
  background-color: ${theme.colors.black};
  width: 100%;
  h1, h3, p{
    color: ${theme.colors.white};
  }
  h1 {
    margin-bottom: 1rem;
  }

  .contentFooter {
    display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.7fr;
  grid-gap: 1.5rem;
  align-content: center;
  justify-items: center;
  padding: 3rem 2rem;
  }

  
`



export const Sobre = styled.div``

export const Servicos = styled.div`
line-height: 2rem;
letter-spacing: 0.09rem;
`

export const Social = styled.div`
line-height: 2.5rem;
letter-spacing: 0.09rem;

.iconsFooter {
    color: ${theme.colors.white};
    font-size: 1.8rem;
  }

  div {
    display: flex;
    align-items:center;
    gap: 0.7rem;
  }
`

export const Endereco = styled.div`
display: flex;
width:100%;
gap: 2rem;
line-height: 2rem;
letter-spacing: 0.09rem;

.map_part{
    min-height: 100%;
    min-width: 100%;
}


`

export const Copy = styled.div`
height: 4rem;
width: 100%;
border-top: 1px solid ${theme.colors.white};
background-color: ${theme.colors.black};
display: flex;
align-items: center;
justify-content: center;
font-size: 1.125rem;
`
