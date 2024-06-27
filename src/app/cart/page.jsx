"use client"
import Image from 'next/image';
import { useContext } from 'react';
import { CartContext } from '../_context/CartContext';
import CartApis from '../_utils/CartApis';
import {Trash} from 'lucide-react'
import EmptyCart from './_components/EmptyCart'
import Button from '../_components/Button';

function Cart() {

  const {cart , setCart} = useContext(CartContext)
  const getTotal = () => {
    let totalaAmount = 0;
    cart.forEach(item => {
      totalaAmount = totalaAmount + Number(item?.product?.attributes?.price)
    })
    return totalaAmount
  }
  
  const removeItem = (id) => {
    CartApis.removeItemFromList(id).then( (res) => {
      if(res) setCart((oldCart) => oldCart.filter(item => item.id!== res?.data?.data?.id))
    }).catch( error => {
      console.log('error' , error)
    })
  }

  return !cart[0] ? <EmptyCart/> : (
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Il tuo carello</h1>
      </header>

      <div className="mt-8">
      {cart.map((item) => {
      return ( 
        <ul className="space-y-4 m-2">
          <li className="flex items-center gap-4">
{          <Image
            src={item?.product?.attributes?.banner?.data?.attributes?.url}
            alt= {item?.product?.title}
            width={120}
            height={100}
            className="rounded-t-lg h-[100px] object-cover"
          />}
            <div>
{              <h3 className="text-sm text-gray-900">{item?.product?.title}</h3>
}
              <dl className="mt-0.5 space-y-px text-[12px] text-gray-600">
              <div>
                  <dt className="inline text-primary">Nome:</dt>
                  <dd className="inline"> {item?.product?.attributes.title}</dd>
                </div>
                <div>
                  <dt className="inline text-primary">Prezzo:</dt>
                  <dd className="inline"> {item?.product?.attributes.price}€</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
              <form>
                <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                <input
                  type="number"
                  min="1"
                  value="1"
                  id="Line1Qty"
                  className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />
              </form>

              <button onClick={() =>  removeItem(item?.id) } className="text-gray-600 transition hover:text-red-600">
                <span className="sr-only">Remove item</span>
                <Trash />
              </button>
            </div>
          </li>
        </ul>
        )})}

        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">

              <div className="flex justify-between">
                <dt>IVA</dt>
                <dd>22%</dd>
              </div>

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>{getTotal()}</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <p className="whitespace-nowrap text-xs">1 Sconto di benvenuto e stato applicato</p>
              </span>
            </div>

            <div className="flex justify-end">
              <Button href={"/checkout"} title={"Checkout"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Cart