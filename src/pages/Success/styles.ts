import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['yellow-400']};
  }

  p {
    font-size: 1.25rem;
  }
`

export const SuccessInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 32.875rem;
  width: 100%;
  margin-top: 2.5rem;
  padding: 2.5rem;

  background: linear-gradient(
        ${(props) => props.theme['white-bg']},
        ${(props) => props.theme['white-bg']}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme['yellow-400']},
        ${(props) => props.theme['purple-400']}
      )
      border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
`

export const BaseContainerInfo = styled.div`
  display: flex;
  gap: 1rem;

  div {
    display: flex;
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    padding: 8px;
    color: ${(props) => props.theme['white-bg']};
  }
`
export const AdressInfo = styled(BaseContainerInfo)`
  div {
    background-color: ${(props) => props.theme['purple-400']};
  }
`
export const TimeInfo = styled(BaseContainerInfo)`
  div {
    background-color: ${(props) => props.theme['yellow-400']};
  }
`
export const PaymentInfo = styled(BaseContainerInfo)`
  div {
    background-color: ${(props) => props.theme['yellow-700']};
  }
`
