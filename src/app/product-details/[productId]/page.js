"use client";
import ProductApis from "../../_utils/productApis";
import React, { useEffect, useState } from "react";
import ProductBanner from "../_components/ProductBanner";
import ProductInfo from "../_components/ProductInfo";
import ProductList from "../../_components/ProductList.jsx";

function ProductDetails({ params }) {
  const [productDetails, setproductDetails] = useState({});
  const [preoductList, setpreoductList] = useState([]);

  useEffect(() => {
    getProductById_();
  }, [params?.productId]);

  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then((res) => {
      console.log(res.data.data);
      setproductDetails(res.data.data);
      getProductByCategory(res.data.data);
    });
  };

  const getProductByCategory = (product) => {
    ProductApis.getProductCategory(product?.attributes.category).then((res) => {
      setpreoductList(res?.data?.data);
    });
  };
  return (
    <>
      <div className="px-10 py-8 md:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 m-30 mt-10 md:flex-row">
          <ProductBanner product={productDetails} />
          <ProductInfo product={productDetails} />
        </div>
        <h1 className="text-center text-[20px] py-10">Auto simili</h1>
        <ProductList productList={preoductList} />
      </div>
    </>
  );
}

export default ProductDetails;
