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
import { Product } from '../../types'

export function Home() {
  // const { 'yellow-700': teste } = useContext(ThemeContext)

  const { addProduct } = useContext(CartContext)

  const [products, setProducts] = useState<Product[]>([])

  async function getProducts() {
    try {
      const response = await api.get<Product[]>('/products')
      const data = response.data.map((product) => ({
        ...product,
        amount: 1,
      }))

      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  function handleAmountProduct(productId: number, amount: number) {
    const updatedProductAmount = [...products]

    const productAmount = updatedProductAmount.find(
      (product) => product.id === productId,
    )

    if (amount <= 0) return

    if (productAmount) {
      productAmount.amount = amount
    }
    setProducts(updatedProductAmount)
  }

  useEffect(() => {
    console.log('itemsAmount', products)
  }, [products])

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
          <div className="shoppingCart">
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
        {products?.map((product) => {
          return (
            <CoffeeCart key={product.id}>
              <CoffeeDetails>
                <img src={product.img} alt="" />
                <span>{product.tags}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </CoffeeDetails>
              <CoffeeBuy>
                <span>{formatPrice(product.price)}</span>

                <CoffeeQuantity>
                  <CoffeeMinusButton>
                    <Minus
                      weight="bold"
                      onClick={() =>
                        handleAmountProduct(product.id, product.amount - 1)
                      }
                    />
                  </CoffeeMinusButton>
                  <p>{product.amount}</p>
                  <CoffeePlusButton>
                    <Plus
                      weight="bold"
                      onClick={() =>
                        handleAmountProduct(product.id, product.amount + 1)
                      }
                    />
                  </CoffeePlusButton>
                </CoffeeQuantity>

                <CoffeeShoppingCartButton
                  onClick={() => {
                    addProduct(product.id, product.amount)
                    handleAmountProduct(product.id, 1)
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
