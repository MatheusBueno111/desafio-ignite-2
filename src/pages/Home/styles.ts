import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const ImgCoffeeDelivery = styled.div`
  position: absolute;
  left: 40.5rem;
  top: 5rem;
`

export const HomeMainContainer = styled.div`
  max-width: 36.75rem;
  margin-top: 5.875rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ItemsList = styled.div`
  display: flex;
  max-width: 35.4375rem;
  flex-wrap: wrap;

  margin-top: 4.125rem;
  margin-bottom: 6.75rem;

  gap: 2rem;
`

export const BaseItemList = styled.div`
  display: flex;
  min-width: 14.4375rem;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    border-radius: 1000px;
    padding: 8px;
    color: ${(props) => props.theme['white-bg']};
  }
`
export const ItemListShoppingCart = styled(BaseItemList)`
  div {
    background-color: ${(props) => props.theme['yellow-700']};
  }
`
export const ItemListPackage = styled(BaseItemList)`
  div {
    background-color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ItemListTimer = styled(BaseItemList)`
  div {
    background-color: ${(props) => props.theme['yellow-400']};
  }
`
export const ItemListCoffee = styled(BaseItemList)`
  div {
    background-color: ${(props) => props.theme['purple-400']};
  }
`
export const CoffeeSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const CoffeeCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 16rem;
  padding: 1.25rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
`

export const CoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: calc(0px - 2.75rem);
    width: 7.5rem;
    height: 7.5rem;
  }

  span {
    margin-top: 0.75rem;
    color: ${(props) => props.theme['yellow-700']};
    background-color: ${(props) => props.theme['yellow-100']};
    padding: 4px 8px;
    border-radius: 1000px;
    font-size: 0.625rem;
    font-weight: 700;
  }

  h3 {
    margin-top: 1rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.3;
  }
`
export const CoffeeBuy = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-top: 2rem;
  justify-content: center;
  span {
    font-size: 1.2rem;
    font-family: 'Baloo 2';
  }
`
export const CoffeeQuantity = styled.div`
  display: flex;
  padding: 0.5rem;

  background-color: ${(props) => props.theme['base-button']};
  justify-content: center;
  gap: 10px;
  border-radius: 6px;
  font-size: 1.25rem;
  button {
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme['purple-400']};
  }
`
export const CoffeeMinusButton = styled.button`
  font-size: 1rem;
  align-items: center;

  :hover {
    color: ${(props) => props.theme['purple-700']};
  }
`

export const CoffeePlusButton = styled.button`
  font-size: 1rem;

  :hover {
    color: ${(props) => props.theme['purple-700']};
  }
`

export const CoffeeShoppingCartButton = styled.button`
  margin-left: 1rem;
  display: flex;
  border: 0;
  padding: 10px;
  justify-content: center;
  background-color: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme['white-bg']};
  border-radius: 10px;
  transition: background-color 0.2s;

  :hover {
    background-color: ${(props) => props.theme['purple-400']};
  }
`
