import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 40px;
`
export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CheckoutInfosWrapper = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;
  width: 40rem;
  margin-top: 1rem;
`
export const DeleviryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.8rem;
  position: relative;

  span {
    color: ${(props) => props.theme['yellow-700']};
    position: absolute;
    left: calc(0px - 1.8rem);
  }

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 35rem;
  margin-top: 2rem;
`

export const BaseInput = styled.input`
  display: flex;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-input']};
  padding: 1rem;
  font-size: 14px;
  color: ${(props) => props.theme['base-text']};
  border-radius: 4px;
  margin-bottom: 1rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  :focus {
    border-color: ${(props) => props.theme['yellow-700']};
  }
`

export const CepInput = styled(BaseInput)``
export const AdressInput = styled(BaseInput)`
  flex: 1;
  min-width: 35rem;
`
export const NumberInput = styled(BaseInput)`
  margin-right: 1rem;
`
export const ComplementInput = styled(BaseInput)`
  flex: 1;
`
export const DistrictInput = styled(BaseInput)`
  margin-right: 1rem;
`
export const CityInput = styled(BaseInput)`
  margin-right: 1rem;
`
export const UFInput = styled(BaseInput)`
  max-width: 3.75rem;
`
export const CheckoutInfosPayment = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem;
  width: 40rem;
`
export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.8rem;
  position: relative;

  span {
    color: ${(props) => props.theme['purple-400']};
    position: absolute;
    left: calc(0px - 1.8rem);
  }

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentButtonTypes = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  margin-top: 2rem;
`
const BaseButton = styled.button`
  flex: 1;
  display: flex;
  padding: 1rem;
  font-size: 0.75rem;
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  gap: 0.75rem;
  color: ${(props) => props.theme['purple-400']};
  p {
    color: ${(props) => props.theme['base-text']};
  }

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
export const ButtonCreditCard = styled(BaseButton)``
export const ButtonDebitCard = styled(BaseButton)``
export const ButtonMoney = styled(BaseButton)``

export const AsideContainer = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const AsideWrapper = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['base-card']};
  margin-top: 1rem;
`

export const CoffeeProductCart = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  flex: 1;
  padding-bottom: 12px;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  margin-bottom: 12px;

  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    display: flex;
    justify-content: end;
    font-weight: 700;
  }
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  gap: 0.5rem;
`
export const CoffeeQuantity = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  justify-content: center;
  gap: 10px;
  border-radius: 6px;
  font-size: 1.25rem;
`
// pegando o button da Home
// export const BaseButtonCoffeeQuantity = styled.button`
//   border: 0;
//   background-color: transparent;
//   color: red;
// `
// export const CoffeeMinusButton = styled(BaseButtonCoffeeQuantity)`
//   font-size: 1rem;
//   color: red;
// `

// export const CoffeePlusButton = styled(BaseButtonCoffeeQuantity)`
//   font-size: 1rem;
// `

export const TrashButton = styled.button`
  display: flex;
  padding: 8px 6.5px;
  border: 0;
  align-items: center;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  gap: 0.25rem;
  color: ${(props) => props.theme['purple-400']};
  transition: background-color 0.2s;

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
  }

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
export const DeliveryValues = styled.div`
  display: flex;
  flex-direction: column;

  table {
    flex: 1;

    tr {
      display: flex;
      justify-content: space-between;
      &:first-child {
        margin-bottom: 0.75rem;
      }

      &:last-child {
        margin-top: 0.75rem;
      }
    }
  }

  button {
    display: flex;
    justify-content: center;
    border: 0;
    background-color: ${(props) => props.theme['yellow-400']};
    padding: 12px 8px;
    border-radius: 6px;
    margin-top: 2rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    transition: background-color 0.2s;

    :hover {
      background-color: ${(props) => props.theme['yellow-700']};
    }
  }
`
