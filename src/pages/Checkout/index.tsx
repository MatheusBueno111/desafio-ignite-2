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
import { FocusEvent, useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { NewCreateUserFormData } from '../../types'

export function Checkout() {
  const { cart, removeProduct, updatedProductAmount } = useContext(CartContext)
  const { createNewUser } = useContext(UserContext)
  const navigate = useNavigate()

  const [paymentType, setPaymentType] = useState('')

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

  const { register, handleSubmit, reset, watch, setValue, setFocus } =
    useForm<NewCreateUserFormData>({
      defaultValues: {
        adress: '',
        complement: '',
        district: '',
        city: '',
        uf: '',
      },
    })

  function handleCreateNewUser(data: NewCreateUserFormData) {
    console.log(data)
    const parsedValues = {
      ...data,
      payment: paymentType,
    }
    createNewUser(parsedValues)
    reset()
    navigate('/success')
  }

  function handleCheckCep(event: FocusEvent<HTMLInputElement>) {
    const cep = event.target.value.replace(/\D/g, '')
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setValue('adress', data.logradouro)
        setValue('district', data.bairro)
        setValue('city', data.localidade)
        setValue('uf', data.uf)
        setFocus('number')
      })
  }

  const adress = watch('adress')
  const isSubmitDisabled = !adress || cart.length === 0 || paymentType === ''

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

          <FormContainer
            onSubmit={handleSubmit(handleCreateNewUser)}
            id="deliveryForm"
          >
            <label htmlFor="cep"></label>
            <CepInput
              id="cep"
              placeholder="Cep"
              pattern="[0-9]{5}[-][0-9]{3}"
              title="Formato XXXXX-XXX"
              {...register('cep', { required: true })}
              onBlur={handleCheckCep}
              // "\d{5}[-.\s]?\d{3}"
            />

            <label htmlFor="adress"></label>
            <AdressInput
              id="adress"
              placeholder="Rua"
              {...register('adress', { required: true })}
            />

            <label htmlFor="number"></label>
            <NumberInput
              id="number"
              type="number"
              placeholder="Número"
              {...register('number', { required: true, valueAsNumber: true })}
            />

            <label htmlFor="complement"></label>
            <ComplementInput
              id="complement"
              placeholder="Complemento"
              {...register('complement', { required: false })}
            />

            <label htmlFor="district"></label>
            <DistrictInput
              id="district"
              placeholder="Bairro"
              {...register('district', { required: true })}
            />

            <label htmlFor="city"></label>
            <CityInput
              id="city"
              placeholder="Cidade"
              {...register('city', { required: true })}
            />

            <label htmlFor="uf"></label>
            <UFInput
              id="uf"
              placeholder="UF"
              {...register('uf', { required: true })}
            />
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
            <button
              onClick={() => setPaymentType('Cartão de Crédito')}
              style={
                paymentType === 'Cartão de Crédito'
                  ? { backgroundColor: '#EBE5F9', border: '1px solid #8047F8' }
                  : {}
              }
            >
              <CreditCard size={16} />
              <p>CARTÃO DE CRÉDITO</p>
            </button>

            <button
              onClick={() => setPaymentType('Cartão de Débito')}
              style={
                paymentType === 'Cartão de Débito'
                  ? { backgroundColor: '#EBE5F9', border: '1px solid #8047F8' }
                  : {}
              }
            >
              <Bank size={16} />
              <p>CARTÃO DE DÉBITO</p>
            </button>

            <button
              onClick={() => setPaymentType('Dinheiro')}
              style={
                paymentType === 'Dinheiro'
                  ? {
                      backgroundColor: '#EBE5F9',
                      border: '1px solid #8047F8',
                    }
                  : {}
              }
            >
              <Money size={16} />
              <p>DINHEIRO</p>
            </button>
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

            <button
              type="submit"
              form="deliveryForm"
              disabled={isSubmitDisabled}
            >
              CONFIRMAR PEDIDO
            </button>
          </DeliveryValues>
        </AsideWrapper>
      </AsideContainer>
    </CheckoutContainer>
  )
}
