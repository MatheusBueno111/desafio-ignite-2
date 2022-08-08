import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'

import {
  CoffeeBuy,
  CoffeeCart,
  CoffeeDetails,
  CoffeeMinusButton,
  CoffeePlusButton,
  CoffeeQuantity,
  CoffeeSection,
  CoffeeShoppingCartButton,
  HomeContainer,
  HomeMainContainer,
  ImgCoffeeDelivery,
  ItemListCoffee,
  ItemListPackage,
  ItemListShoppingCart,
  ItemListTimer,
  ItemsList,
} from './styles'
import { CartContext } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/format'
import { useContext, useEffect, useState } from 'react'
import { api } from '../../services/api'

interface CoffeesProps {
  id: number
  name: string
  description: string
  price: number
  img: string
  tags: string[]
  amount: number
}

interface ProductItemsAmount {
  [key: number]: number
}

export function Home() {
  const { addProduct } = useContext(CartContext)

  const [coffeeList, setCoffeeList] = useState<CoffeesProps[]>([])
  const [productAmount, setProductAmount] = useState<any>([])

  async function getCoffees() {
    try {
      const response = await api.get('/cafes')
      setCoffeeList(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const getAmount = () => {
    console.log('coffeeList asda>>', coffeeList)
  }

  useEffect(() => {
    getCoffees()
    getAmount()
  }, [])

  return (
    <HomeContainer>
      <HomeMainContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </HomeMainContainer>

      <ItemsList>
        <ItemListShoppingCart>
          <div>
            <ShoppingCart size={16} weight="fill" />
          </div>
          <span>Compra simples e segura</span>
        </ItemListShoppingCart>
        <ItemListPackage>
          <div>
            <Package size={16} weight="fill" />
          </div>
          <span>Embalagem mantém o café intacto</span>
        </ItemListPackage>
        <ItemListTimer>
          <div>
            <Timer size={16} weight="fill" />
          </div>
          <span>Entrega rápida e rastreada</span>
        </ItemListTimer>
        <ItemListCoffee>
          <div>
            <Coffee size={16} weight="fill" />
          </div>
          <span>O café chega fresquinho até você</span>
        </ItemListCoffee>
      </ItemsList>

      <ImgCoffeeDelivery>
        <img src="/coffeeDelivery.png" alt="" />
      </ImgCoffeeDelivery>

      <CoffeeSection>
        {coffeeList?.map((coffee) => {
          return (
            <CoffeeCart key={coffee.id}>
              <CoffeeDetails>
                <img src={coffee.img} alt="" />
                <span>{coffee.tags}</span>
                <h3>{coffee.name}</h3>
                <p>{coffee.description}</p>
              </CoffeeDetails>
              <CoffeeBuy>
                <span>{formatPrice(coffee.price)}</span>
                <CoffeeQuantity>
                  <CoffeeMinusButton>
                    <Minus weight="bold" />
                  </CoffeeMinusButton>
                  <p>{coffee.amount}</p>
                  <CoffeePlusButton>
                    <Plus weight="bold" />
                  </CoffeePlusButton>
                </CoffeeQuantity>
                <CoffeeShoppingCartButton
                  onClick={() => {
                    addProduct(coffee.id, coffee.amount)
                  }}
                >
                  <ShoppingCart size={22} weight="fill" />
                </CoffeeShoppingCartButton>
              </CoffeeBuy>
            </CoffeeCart>
          )
        })}
      </CoffeeSection>
    </HomeContainer>
  )
}
