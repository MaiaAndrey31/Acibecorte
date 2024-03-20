import { styled } from 'styled-components'
import { theme } from '../../styles/theme';

export const LinkWhats = styled.a`
.pulse {
  animation: animate-pulse 3s linear infinite;
}

  @keyframes animate-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(51, 204, 102, 0.7), 0 0 0 0 rgba(51, 204, 102, 0.7);
  }
  40% {
    box-shadow: 0 0 0 50px rgba(51, 204, 102, 0), 0 0 0 0 rgba(51, 204, 102, 0.7);
  }
  80% {
    box-shadow: 0 0 0 50px rgba(51, 204, 102, 0), 0 0 0 30px rgba(51, 204, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(51, 204, 102, 0), 0 0 0 30px rgba(51, 204, 102, 0);
  }
}


@keyframes animate-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(51, 204, 102, 0.7), 0 0 0 0 rgba(51, 204, 102, 0.7);
  }
  40% {
    box-shadow: 0 0 0 50px rgba(51, 204, 102, 0), 0 0 0 0 rgba(51, 204, 102, 0.7);
  }
  80% {
    box-shadow: 0 0 0 50px rgba(51, 204, 102, 0), 0 0 0 30px rgba(51, 204, 102, 0);
  }
  100%

   {
    box-shadow: 0 0 0 0 rgba(51, 204, 102, 0), 0 0 0 30px rgba(51, 204, 102, 0);
  }
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
