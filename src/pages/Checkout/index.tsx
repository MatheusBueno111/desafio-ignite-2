import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'

import {
  CoffeeMinusButton,
  CoffeePlusButton,
  CoffeeQuantity,
} from '../Home/styles'

import {
  AdressInput,
  AsideContainer,
  AsideWrapper,
  ButtonCreditCard,
  ButtonDebitCard,
  ButtonMoney,
  CepInput,
  CheckoutContainer,
  CheckoutInfosPayment,
  CheckoutInfosWrapper,
  CheckoutWrapper,
  CityInput,
  CoffeeProductCart,
  ComplementInput,
  DeleviryWrapper,
  DeliveryValues,
  DistrictInput,
  FormContainer,
  NumberInput,
  PaymentButtonTypes,
  PaymentWrapper,
  ProductContainer,
  TrashButton,
  UFInput,
} from './styles'
import { formatPrice } from '../../utils/format'

export function Checkout() {
  const { cart, removeProduct, updatedProductAmount } = useContext(CartContext)

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  }))

  const total = cart.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount
  }, 0)

  const totalFormated = formatPrice(total)
  const totalWithTax = formatPrice(total + 3.5)

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

  function handleDecrementalProduct(productId: number, amount: number) {
    updatedProductAmount(productId, amount + 1)
  }

  function handleIncrementalProduct(productId: number, amount: number) {
    updatedProductAmount(productId, amount + 1)
  }

  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <h1>Complete seu pedido</h1>
        <CheckoutInfosWrapper>
          <DeleviryWrapper>
            <span>
              <MapPin size={22} />
            </span>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </DeleviryWrapper>
          <FormContainer>
            <label htmlFor="cep"></label>
            <CepInput id="cep" placeholder="cep" />

            <label htmlFor="adress"></label>
            <AdressInput id="adress" placeholder="Rua" />

            <label htmlFor="number"></label>
            <NumberInput id="number" placeholder="Número" />

            <label htmlFor="complement"></label>
            <ComplementInput id="complement" placeholder="Complemento" />

            <label htmlFor="district"></label>
            <DistrictInput id="district" placeholder="district" />

            <label htmlFor="city"></label>
            <CityInput id="city" placeholder="city" />

            <label htmlFor="uf"></label>
            <UFInput id="uf" placeholder="uf" />
          </FormContainer>
        </CheckoutInfosWrapper>
        <CheckoutInfosPayment>
          <PaymentWrapper>
            <span>
              <CurrencyDollarSimple size={22} />
            </span>
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </PaymentWrapper>
          <PaymentButtonTypes>
            <ButtonCreditCard>
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </ButtonCreditCard>
            <ButtonDebitCard>
              <Bank size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </ButtonDebitCard>
            <ButtonMoney>
              <Money size={16} />
              <p>DINHEIRO</p>
            </ButtonMoney>
          </PaymentButtonTypes>
        </CheckoutInfosPayment>
      </CheckoutWrapper>

      <AsideContainer>
        <h1>Cafés Selecionados</h1>
        <AsideWrapper>
          {cartFormatted.map((product) => {
            return (
              <CoffeeProductCart key={product.id}>
                <img src={product.img} alt={product.name} />
                <div>
                  <p>{product.name}</p>
                  <ProductContainer>
                    <CoffeeQuantity>
                      <CoffeeMinusButton>
                        <Minus
                          weight="bold"
                          onClick={() =>
                            handleDecrementalProduct(product.id, product.amount)
                          }
                        />
                      </CoffeeMinusButton>
                      <p>{product.amount}</p>
                      <CoffeePlusButton>
                        <Plus
                          weight="bold"
                          onClick={() =>
                            handleIncrementalProduct(product.id, product.amount)
                          }
                        />
                      </CoffeePlusButton>
                    </CoffeeQuantity>
                    <TrashButton
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <Trash />
                      <p>REMOVER</p>
                    </TrashButton>
                  </ProductContainer>
                </div>
                <span>{product.subTotal}</span>
              </CoffeeProductCart>
            )
          })}
          <DeliveryValues>
            <table>
              <thead>
                <tr>
                  <td>Total de itens</td>
                  <td>{totalFormated}</td>
                </tr>
                <tr>
                  <td>Entrega</td>
                  <td>R$ 3,50</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{totalWithTax}</td>
                </tr>
              </thead>
            </table>

            <button>CONFIRMAR PEDIDO</button>
          </DeliveryValues>
        </AsideWrapper>
      </AsideContainer>
    </CheckoutContainer>
  )
}
