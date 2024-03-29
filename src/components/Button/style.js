import {styled} from 'styled-components'
import { theme } from '../../styles/theme';

export const Container = styled.button`
background-color: ${theme.colors.dark};
border: 1none ;
color: ${theme.colors.white};
width: 13rem;
height: 3.250rem;
border-radius: 0.750rem;
transition: all 200ms;
font-size: 1.05rem;
font-weight: 700;

&:hover{
background-color: transparent;
border: 1px solid ${theme.colors.white};
cursor: pointer;
scale: calc(.95);
}
`