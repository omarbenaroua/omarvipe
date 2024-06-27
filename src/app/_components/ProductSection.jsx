'use client'
import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/productApis';
import Loading from "./Loading"

function ProductSection() {
  const [productList , setProductList] = useState([])
  console.log(productList)
  useEffect (() =>{
    getLatestProducts_();
  },[])
  const getLatestProducts_=() => {
    ProductApis.getLasttestProducts().then(res => {
      setProductList(res.data.data)
      console.log(res.data.data)
    })
  }
  return (
    <>
    <div className='px-10 md:px-20 mb-20'>
    <h2 className='text-center md:text-2xl p-3 my-10 text-primary'>I NOSTRI PRODOTTI</h2>
    {!productList[0] ? <Loading/> : <ProductList productList={ productList }/>}
    </div>
    </>
  )
}

export default ProductSection