import { styled } from 'styled-components'
import { theme } from '../../styles/theme'


export const Container = styled.div`
  background-color: ${theme.colors.primary};
  width: 100%;
  height: 9.625rem;
  display: flex;
  flex-direction: row;
`

export const Image = styled.div`
  max-width: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24rem;
    height: auto;
    padding-left: 1rem;
  }
`

export const HeaderContent = styled.div`
  display: block;
  width: 100%;
`

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  height: 50%;
  min-width: 100%;
  border-bottom: 1px solid ${theme.colors.white};
`
export const Info = styled.div`
  display: block;

  div {
    display: flex;
    gap: 1.5rem;
    padding-top: 0.125rem;
    
  
  }
  a {
    font-size: 1.25rem;
    text-decoration: none;
    color: ${theme.colors.white};
    padding-left: .0125rem;

    &:hover {
        cursor: pointer;
        color: ${theme.colors.dark};
    }
   
  }
  
`
export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  
  .menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  .button {
padding: .7rem .7rem;
  }

  a {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${theme.colors.white};
    text-decoration: none;

    &:hover {
        cursor: pointer;
        color: ${theme.colors.dark};
    }
  }

`

export const Icons = styled.div`
display: flex;
gap: 2rem;
align-items: center;

&:hover {
        cursor: pointer;
        
    }

`


