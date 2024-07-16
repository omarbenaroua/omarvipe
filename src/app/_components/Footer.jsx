"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { Facebook , Instagram , Twitter , Github } from "lucide-react";

function Footer() { 
  const { user } = useUser();
  return (
    user && (
      <footer className="bg-gray-100">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-600">
      <Image src={Logo} height={"100"} width={"100"} alt=""/>
    </div>
    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
    Scopri il piacere del vaping con le nostre sigarette elettroniche di alta qualità e una vasta gamma
    di aromi per un'esperienza di fumo unica e soddisfacente.
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 ">
      <li>
        <a className="text-gray-700 transition hover:text-primary" href="/"> Home </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-primary" href="/pages/about"> About </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-primary" href="/product-details"> Products </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-primary" href="/pages/services"> Services </a>
      </li>

      <li>
        <a className="text-gray-700 transition hover:text-primary" href="/pages/position"> Dove ci troviamo </a>
      </li>
    </ul>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      <li>
        <a
          href="https://omar-dev-beryl.vercel.app/"
          className="text-gray-700 transition hover:text-primary"
        >
          <span className="sr-only">Facebook</span>
          <Facebook/>
        </a>
      </li>

      <li>
        <a
          href="https://omar-dev-beryl.vercel.app/"
          className="text-gray-700 transition hover:text-primary"
        >
          <span className="sr-only">Instagram</span>
          <Instagram/>
        </a>
      </li>

      <li>
        <a
          href="https://omar-dev-beryl.vercel.app/"
          className="text-gray-700 transition hover:text-primary"
        >
          <span className="sr-only">Twitter</span>
          <Twitter/>
        </a>
      </li>

      <li>
        <a
          href="https://omar-dev-beryl.vercel.app/"
          className="text-gray-700 transition hover:text-primary"
        >
          <span className="sr-only">GitHub</span>
          <Github/>
        </a>
      </li>
    </ul>
  </div>
</footer>
    )
  );
}

export default Footer;
