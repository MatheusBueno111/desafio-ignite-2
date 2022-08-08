import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.5rem;
    position: relative;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      border-radius: 6px;
      gap: 0.25rem;

      background-color: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-400']};

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;

      span {
        color: ${(props) => props.theme['purple-700']};
      }
    }

    a {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-radius: 8px;

      background-color: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-700']};
    }

    p {
      position: absolute;

      width: 1rem;
      height: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px;
      border-radius: 50%;
      left: 145px;
      bottom: 30px;

      background-color: ${(props) => props.theme['yellow-700']};
      color: ${(props) => props.theme.white};
      font-size: 12px;
      font-weight: bold;
    }
  }
`
