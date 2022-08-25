import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import {
  AdressInfo,
  PaymentInfo,
  SuccessContainer,
  SuccessInfo,
  SuccessWrapper,
  TimeInfo,
} from './styles'

export function Success() {
  const { user } = useContext(UserContext)

  const adressFormated = ` ${user?.district} - ${user?.city}, ${user?.uf}`

  return (
    <SuccessContainer>
      <SuccessWrapper>
        <h1>Uhu! Pedido Confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessWrapper>

      <SuccessInfo>
        <AdressInfo>
          <div>
            <MapPin size={16} weight="fill" />
          </div>
          <span>
            Entrega em{' '}
            <strong>
              {user?.adress}, {user?.number}
            </strong>
            <br />
            {adressFormated}
          </span>
        </AdressInfo>
        <TimeInfo>
          <div>
            <Timer size={16} weight="fill" />
          </div>
          <span>
            <p>Previsão de chegada</p>
            <strong>20min - 30min</strong>
          </span>
        </TimeInfo>
        <PaymentInfo>
          <div>
            <CurrencyDollarSimple size={16} weight="fill" />
          </div>
          <span>
            <p>Pagamento na entrega</p>
            <strong>{user?.payment}</strong>
          </span>
        </PaymentInfo>
      </SuccessInfo>

      <div>
        <img src="/deliverySuccess.png" alt="" />
      </div>
    </SuccessContainer>
  )
}
