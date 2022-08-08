import { CoffeeLogo } from '../../assets/CoffeeLogo'
import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <CoffeeLogo />
      </NavLink>

      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Itajubá, MG</span>
        </div>
        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
        <p>1</p>
      </nav>
    </HeaderContainer>
  )
}
