import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (

    <div className='grid grid-cols-2 sm:grid-cols-4'>
      {productList.map( item => (
        <ProductItem product={item} key={item.id}/>
      ))}
    </div>
  )
}

export default ProductList