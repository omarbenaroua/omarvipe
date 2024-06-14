"use client";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../_context/CartContext";


function ProductCart() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div
      className="absolute w-[300px] h-[300px] top-[45px]
     right-[110px] shadow-2xl z-10 overflow-auto
   bg-gray-100 px-4 py-8 sm:px-6
    rounded-xl "
      aria-modal="true"
      role="dialog"
      tabIndex="-1"
    >
      <h1>IL TUO CARRELLO</h1>
      <div className="mt-4 space-y-6">
        {cart.map((item) => {
          console.log(item);
          return (
            <ul className="space-y-4">
              <li className="flex items-center gap-4" key={item?.id}>
                <Image
                  src={item?.product?.attributes?.banner?.data?.attributes?.url}
                  alt={item?.product?.attributes?.title}
                  width={100}
                  height={100}
                  className="rounded-t-lg h-[100px] object-cover"
                />
                <div>
                  <h3 className="text-xs text-gray-900">
                    {item?.product?.attributes?.title}
                  </h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Prezzo: </dt>
                      <dd className="inline text-primary">
                        {item?.product?.attributes?.price}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            </ul>
          );
        })}
        <div className="space-y-4 text-center">
          <a
            href="/cart"
            className="block rounded bg-primary px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            visualizza il tuo carello ({cart?.length})
          </a>
          <a
            href="/product-details"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continua a ordinare
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
