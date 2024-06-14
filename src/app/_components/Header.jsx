"use client";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import ProductCart from "./ProductCart";
import { X } from "lucide-react";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";


function Header() {
  const { cart, setCart } = useContext(CartContext);

  // Opening Cart from header
  const [shoppingCart, setshoppingCart] = useState(false);
  const openingCart = () =>
    shoppingCart ? setshoppingCart(false) : setshoppingCart(true);

  const { user } = useUser();
  useEffect(() => {
    user && getCartItem();
  }, [user]);

  const getCartItem = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        console.log("response from cart items", res?.data?.data);
        res?.data?.data.forEach((citem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: citem?.id,
              product: citem.attributes?.products?.data[0],
            },
          ]);
        });
      }
    );
  };

  const [isLogged, setisLogged] = useState(false);
  useEffect(() => {
    setisLogged(window.location.href.toString().includes("sign-in"));
  }, []);

  return (
    !isLogged && (
      <header className="bg-secondary w-[100%] shadow-xl">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Image src={Logo} alt="logo" width={70} height={50} />
            </div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {""}
                      Home{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/product-details"
                    >
                      {""}
                      Prodotti{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Careers{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      History{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Team{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex gap-4">
              <button onClick={openingCart}>
                {!shoppingCart ? (
                <span className="flex justify-between gap-2 whitespace-nowrap rounded-full bg-primary px-2.5 py-0.5 text-sm text-white">
                 {cart?.length} <ShoppingCart />
                </span>
                ) : (
                  <>
                    <X className="text-primary" />
                    <ProductCart />
                  </>
                )}
              </button>
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-secondary shadow"
                    href="/sign-in"
                  >
                    Accedi
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-secondary px-5 py-2.5 text-sm font-medium text-primary"
                      href="/sign-in"
                    >
                      Registrati
                    </a>
                  </div>
                </div>
              ) : (
                <UserButton afterSignOutUrl="/" />
              )}
            </div>
          </div>
        </div>
      </header>
    )
  );
}

export default Header;
