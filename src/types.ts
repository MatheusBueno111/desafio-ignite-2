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

export interface NewCreateUserFormData {
  cep: string
  adress: string
  number: number
  complement?: string
  district: string
  city: string
  uf: string
  payment: string
}
