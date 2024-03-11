import {styled} from 'styled-components'
import { theme } from '../../styles/theme';

export const Container = styled.div`
height: 30rem;
width: 30rem;
border: .1rem solid ${theme.colors.neutral};
border-radius: 3rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: -7px 6px 5px 0px rgba(250,247,250,0.64);

h1 {
    font-size: 2rem;
    color: ${theme.colors.white};
    padding: 1rem;
}

p{
    font-size: 1.2rem;
    color: ${theme.colors.white};
    padding: 1rem;
}


`