import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  padding-top: 2rem;
  a {
    text-decoration: none;
  }
`
export const ButtonIcon = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 0.5rem;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.success};
  border: 0.125rem solid ${theme.colors.white};
  border-radius: 1.5rem;
  padding: 0.9rem 0.5rem;
  transition: all ease 500ms;

  .icon {
    color: ${theme.colors.white};
    font-size: 2.4rem;
  }

  h5 {
    font-size: 1.5rem;
    color: ${theme.colors.white};
    font-weight: 600;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: scale(0.9);
  }
`
