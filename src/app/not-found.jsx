import React from 'react'
import Button from "./_components/Button"

function Notfound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
  <div className="text-center">
    <h1 className="text-9xl font-black text-gray-200">404</h1>

    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">oh-oh!</p>

    <p className="mt-4 text-gray-500">Qualcosa e andato storto... :/</p>
    <Button href={"/"} title={"Torna alla pagina principale"}/>
  </div>
</div>
  )
}

export default Notfound