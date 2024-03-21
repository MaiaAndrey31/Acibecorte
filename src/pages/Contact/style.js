import { styled } from 'styled-components'
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.colors.dark};
`

export const infoContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  h1{
    font-size: 3rem;
  }
`
