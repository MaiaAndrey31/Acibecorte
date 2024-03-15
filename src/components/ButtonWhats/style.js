 import {styled} from 'styled-components'
import { theme } from '../../styles/theme';

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
 gap: .5rem;
 flex-direction: row-reverse;
 align-items: center;
 justify-content: center;
 background-color: ${theme.colors.success};
 border: .125rem solid ${theme.colors.white};
 border-radius: 1.5rem;
 padding: .9rem .5rem;
 transition: all ease-in-out 200ms;

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
   opacity: 0.8;
   transform: scale(.98);
 }
`
