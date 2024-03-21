import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  background-color: ${theme.colors.black};
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  .titleIcons {
    display: flex;
    gap: 0.9rem;
    justify-content: center;
    align-items: center;

    .icon {
      font-size: 2.5rem;

      color: ${theme.colors.success};
    }
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  max-width: 50vw;
  gap: 2rem;
`
export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 40px;
  width: 40rem;
  min-height: 45%;
  border: 0.6rem double ${theme.colors.neutral};
  padding: 2rem;
  gap: 1.5rem;

  h1 {
    font-size: 3rem;
    color: ${theme.colors.white};
  }

  p {
    font-size: 1.3rem;
    color: ${theme.colors.neutral};
  }
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`

export const RightBox = styled.div`
  width: 90%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  border: 0.6rem double ${theme.colors.neutral};
  padding: 2rem;
  gap: 1.5rem;

  h1 {
    font-size: 3rem;
    color: ${theme.colors.white};
  }

  p {
    font-size: 1.5rem;
    color: ${theme.colors.neutral};
  }
`
