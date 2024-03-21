import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  min-height: 100vh;
  align-items: center;
  padding: 2rem 0;
  
  
  

  .background {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100vh;
  }

  .conteudo-background {
    height: auto;
    width: auto;
    min-width: 100%;
    max-width: 100%;
    position: fixed;
    top: 0;
  }

  .mascara-video {
    z-index: 2;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      109deg,
      rgba(10, 12, 16, 0.49) 15%,
      rgba(10, 12, 16, 0.4) 50%,
      rgba(10, 12, 16, 0.49) 85%
    );
  }

  .content {
    min-height: 80%;
    width: 40.625rem;
    border: 0.3rem solid ${theme.colors.white};
    border-radius: 2rem;
    padding: 2rem ;
    text-align: center;
    margin-left: 3rem;
   

    h1 {
      font-size: 4rem;
      padding-bottom: 1rem;
      color: ${theme.colors.light};
    }
    p {
      font-size: 2rem;
      line-height: 2.5rem;
      color: ${theme.colors.light};
    }
  }
`
