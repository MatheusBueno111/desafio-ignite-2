import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { Product } from '../types'

interface CartContextType {
  cart: Product[]
  addProduct: (productId: number, productAmount: number) => void
  removeProduct: (productId: number) => void
  updatedProductAmount: (productId: number, amount: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    console.log('cart :>>', cart)
  }, [cart])

  async function addProduct(productId: number, productAmount: number) {
    try {
      const updatedCart = [...cart]

      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      const currentAmount = productExists ? productExists.amount : 0
      const amount = currentAmount + productAmount

      const productStock = await api.get(`/stock/${productId}`)
      const productStockAmount = productStock.data.amount

      if (productStockAmount >= amount) {
        if (productExists) {
          productExists.amount = amount
        } else {
          const product = await api.get(`/products/${productId}`)
          const newProduct = {
            ...product.data,
            amount: productAmount,
          }
          updatedCart.push(newProduct)
        }

        setCart(updatedCart)
      } else if (productExists) {
        const stockAmount = productStockAmount - productExists.amount
        toast.error(
          `Quantidade solicitada fora do estoque, no estoque: ${stockAmount}`,
        )
      } else {
        toast.error(`Quantidade solicitada fora do estoque`)
      }
    } catch {
      toast.error('Erro na adição do produto')
    }
  }

  async function removeProduct(productId: number) {
    try {
      const updatedCart = [...cart]

      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId,
      )

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1)
        setCart(updatedCart)
      }

      toast.success('Produto removido com sucesso')
    } catch {
      toast.error('Erro na remoção do produto')
    }
  }

  async function updatedProductAmount(productId: number, amount: number) {
    try {
      const updatedCart = [...cart]
      const product = await api.get(`/stock/${productId}`)
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      if (amount <= 0) return

      const productAmount = product.data.amount

      if (productExists && productAmount >= amount && amount > 0) {
        productExists.amount = amount
        setCart(updatedCart)
      } else {
        toast.error('Quantidade solicitada fora do estoque')
      }
    } catch {
      toast.error('Erro na alteração de quantidade do produto')
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updatedProductAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
