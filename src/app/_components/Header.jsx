"use client";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart, Menu } from "lucide-react";
import ProductCart from "./ProductCart";
import { X } from "lucide-react";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import Announcement from "./Announcement";

function Header() {
  const { cart, setCart } = useContext(CartContext);

   // Opening Navbar
   const [openNavbar, setopenNavbar] = useState(false);
   const openingNavbar = () =>
    openNavbar ? setopenNavbar(false) : setopenNavbar(true);
 
  // Opening Cart from header
  const [shoppingCart, setshoppingCart] = useState(false);
  const openingCart = () =>
    shoppingCart ? setshoppingCart(false) : setshoppingCart(true);

  const { user } = useUser();
  useEffect(() => {
    user && getCartItem();
  }, [user]);
  console.log(user)

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
      <>
        <header className="bg-secondary w-[100%] shadow-xl">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 items-center justify-between">
              <div>
                <a href="/">
                  <Image src={Logo} alt="logo" width={70} height={50} />
                </a>
              </div>
              <div className="hidden md:block">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <a
                        className="text-gray-500 transition hover:text-primary"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 transition hover:text-primary"
                        href="/about"
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-primary"
                        href="/product-details"
                      >
                        Products
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-500 transition hover:text-primary"
                        href="/services"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-500 transition hover:text-primary"
                        href="/position"
                      >
                        Dove ci troviamo
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex gap-4">
                <button onClick={openingCart}>
                  {!shoppingCart ? (
                    <span className="flex justify-between gap-2 whitespace-nowrap rounded-full bg-primary px-2.5 py-0.5 text-sm text-white animate-bounce">
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
                  </div>
                ) : (
                  <UserButton afterSignOutUrl="/" />
                )}
              </div>
              <div className="block md:hidden">
                <button onClick={openingNavbar} className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                  <Menu />
                </button>
              </div>
            </div>
            {openNavbar && (
            <div className="block md:hidden">
            <ul className="space-y-1">
              <li>
                <a
                  href="/"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/pages/about"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/product-details"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="/pages/services"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/pages/position"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Dove ci troviamo
                </a>
              </li>
            </ul>
            </div>
            )}
          </div>
        </header>
            
        <Announcement />
      </>
    )
  );
}

export default Header;
