import { createContext, ReactNode, useEffect, useState } from 'react'
import { NewCreateUserFormData } from '../types'

interface UserContextType {
  user: NewCreateUserFormData | undefined
  createNewUser: (data: NewCreateUserFormData) => void
}

export const UserContext = createContext({} as UserContextType)

interface UserConxextProviderProps {
  children: ReactNode
}

export function UserContextProvider({ children }: UserConxextProviderProps) {
  const [user, setUser] = useState<NewCreateUserFormData>()

  useEffect(() => {
    console.log('user:>>', user)
  }, [user])

  function createNewUser(data: NewCreateUserFormData) {
    const newUser: NewCreateUserFormData = {
      adress: data.adress,
      city: data.city,
      number: data.number,
      district: data.district,
      uf: data.uf,
      payment: data.payment,
    }

    setUser(newUser)
  }

  return (
    <UserContext.Provider value={{ user, createNewUser }}>
      {children}
    </UserContext.Provider>
  )
}
