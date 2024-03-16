import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
padding: 3rem 1rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background: rgb(249, 251, 250);
  background: linear-gradient(
    180deg,
    rgba(249, 251, 250, 1) 15%,
    rgba(193, 199, 198, 1) 70%,
    rgba(193, 199, 198, 1) 100%
  );

  h1 {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 5rem;
    color: ${theme.colors.dark};
    padding: 1rem 0;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: ${theme.colors.dark};
    margin: 2rem 0;
  }
`

export const PartOne = styled.div`
display: flex;
gap: 1rem;
padding: .2rem 0;
align-items: center;
justify-content: space-around;
width: 100%;
height: max-content;


p {
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-weight: 600;
  padding: 2rem 4rem;
  color: ${theme.colors.dark};
}
`
export const PartTwo = styled.div`

display: flex;
width: 100%;
height: max-content;
margin: 1rem 0 ;
justify-content: space-around;
align-items: center;



/* div {
 
  border-right: 1px solid ${theme.colors.dark};
  border-radius: none;
} */

  p {
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-weight: 600;
  max-width: 35rem;
  color: ${theme.colors.dark};
  padding-top: 1rem;
}
`

export const ListBox = styled.div`

display: flex;
flex-direction: column;
justify-content: center;






h6 {
    font-size: 2.2rem;
    line-height: 5rem;
    color: ${theme.colors.primary};


  }
span {
  font-size: 2.7rem;
}

`

export const ImageService = styled.div`
min-height: 29.25rem;
min-width: 29.25rem;
border-radius: 50%;

opacity: 0.6;
img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 1.3rem double ${theme.colors.secondary};
}
`


export const Division = styled.div `
width: 3px;
height: 450px;
background-color: ${theme.colors.secondary};
`

