export interface Product {
  id: number
  name: string
  description: string
  price: number
  img: string
  tags: string[]
  amount: number
}

export interface Stock {
  id: number
  amount: number
}
