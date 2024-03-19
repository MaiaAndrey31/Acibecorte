import { styled } from 'styled-components'
import { theme } from '../../styles/theme';

export const LinkWhats = styled.a`

.pulse {
  animation: animate-pulse 3s linear infinite;
}

`

export const BtnWhats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;
  padding: 10px;
  border-radius: 50%;
  background-color: ${theme.colors.success};

  position: fixed;
  bottom: 35px;
  right: 35px;
  z-index: 12;
  cursor: pointer;
`
