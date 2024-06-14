import React from 'react'

function EmptyCart() {
  return (
    <>
    <div className='grid justify-center text-center m-[150px]'>
        <h1 className='text-[100px] text-black'>
            Carrello vuoto
        </h1>
    </div>
    <div className=' grid justify-center text-center my-[100px]'>
        <button className='bg-primary rounded-xl'>
           <a href="/"><p className='text-[20px] text-white p-2'>Aggiungi i prodotti desidetati</p></a> 
        </button>
    </div>
    </>
  )
}

export default EmptyCart