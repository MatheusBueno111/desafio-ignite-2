import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface Product {
  id: number
  name: string
  img: string
  price: number
  amount: number
}

interface CartContextType {
  cart: Product[]
  addProduct: (id: number, amount: number) => void
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

  async function addProduct(id: number, amount: number) {
    try {
      const updatedCart = [...cart]

      const response = await api.get(`/cafes/${id}`)
      const product = response.data

      const productExists = updatedCart.find((product) => product.id === id)

      // console.log('productExists :>>', productExists)

      if (productExists) {
        productExists.amount = productExists.amount + amount
      } else return setCart([...cart, product])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// function updateAmountHomeCart(id: number, amount: number) {
//   const updateCoffeeListAmount = [...coffeeList]
//   const newCoffeeList = updateCoffeeListAmount.map((coffee) => {
//     if (coffee.id === id && amount > 0) {
//       return {
//         ...coffee,
//         amount,
//       }
//     } else return coffee
//   })

//   setCoffeeList(newCoffeeList)
// }

// function updateAmountCheckoutCart(id: number, amount: number) {
//   const updateProduct = [...product]
//   const newProduct = updateProduct?.map((product) => {
//     if (product.id === id && amount > 0) {
//       return {
//         ...product,
//         amount,
//       }
//     } else return product
//   })
//   setProductTotalAmount((state) => {
//     return state + amount
//   })
//   setProduct(newProduct)
// }

// function createNewProduct(id: number, amount: number) {
//   const createAuxNewProduct = [...coffeeList]
//   const auxProductList = [...product]
//   const productListExist = auxProductList.find(
//     (prodocut) => prodocut.id === id,
//   )

//   if (productListExist) {
//     const newProduct = auxProductList.map((product) => {
//       if (product.id === id) {
//         return {
//           ...product,
//           amount: product.amount + amount,
//         }
//       } else return { ...product }
//     })
//     setProductTotalAmount((state) => {
//       return state + amount
//     })
//     setProduct(newProduct)
//   } else
//     createAuxNewProduct.map((element) => {
//       if (element.id === id) {
//         const newProduct: Product = {
//           id,
//           img: element.img,
//           name: element.name,
//           price: element.price,
//           amount: element.amount,
//         }
//         setProductTotalAmount((state) => {
//           return state + amount
//         })
//         return setProduct((state) => [...state, newProduct]) // adicionando novos carts
//       } else return product
//     })

//   const newCoffeeList = createAuxNewProduct.map((aux) => {
//     if (aux.id === id) {
//       return {
//         ...aux,
//         amount: 1,
//       }
//     } else return aux
//   })

//   setCoffeeList(newCoffeeList)
// }

// function deleteProduct(id: number, amount: number) {
//   const updateProductList = [...product]
//   const newProductList = updateProductList.filter((product) => {
//     return product.id !== id
//   })
//   setProductTotalAmount((state) => {
//     return state - amount
//   })
//   setProduct(newProductList)
// }
