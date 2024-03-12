import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  height: 30rem;
  width: 30rem;
  border: 0.15rem solid ${theme.colors.dark};
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -7px 10px 30px 4px rgba(250, 247, 250, 0.64);

  h1 {
    font-size: 2.5rem;
    color: ${theme.colors.white};
    padding: 1rem;
  }

  p {
    font-size: 1.4rem;
    color: ${theme.colors.black};
    padding: 1rem;
  }

  a {
    text-decoration: none;
    padding-top: 1.2rem;
  }
`

export const ButtonIcon = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: .5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.success};
  border: 1px solid ${theme.colors.black};
  border-radius: 1.5rem;
  padding: .5rem 1.5rem;
  transition: all ease-in-out 200ms;

  .icon {
    color: ${theme.colors.white};
    font-size: 2.2rem;
    
    
  }

  h5 {
    font-size: 1.2rem;
    color: ${theme.colors.black};
    font-weight: 600;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transform: scale(.98);
  }
`
