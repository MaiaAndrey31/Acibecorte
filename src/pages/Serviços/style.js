import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  height: 100vh;
  display: flex;
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
`

export const PartOne = styled.div`
display: flex;
gap: 1rem;
padding: 2rem 0;
align-items: center;
justify-content: space-around;
width: 100%;
height: max-content;

p {
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-weight: 800;
  padding: 2rem 4rem;
  color: ${theme.colors.dark};
}
`
export const PartTwo = styled.div`
display: flex;
gap: 3rem;
width: 100%;
height: max-content;

justify-content: space-around;


  p {
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-weight: 600;
  max-width: 35rem;
  color: ${theme.colors.dark};
  padding-top: 2.5rem;
}



`

export const ListBox = styled.div`
min-height: 31.25rem;
min-width: 18.75rem;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
text-align: left;
padding: 2.5rem;
border-radius: 1.5rem;



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
min-height: 31.25rem;
min-width: 31.25rem;
border-radius: 50%;
border: 1rem dashed ${theme.colors.secondary};
opacity: 0.6;
img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
`


