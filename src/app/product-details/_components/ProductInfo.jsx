"use client"
import { ShoppingCart, AlignEndVertical } from "lucide-react";
import Skelatonscreen from "./Skelatonscreen";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../_utils/CartApis"
import { useContext } from "react";
import { CartContext } from "../../_context/CartContext";
import Button from "../../_components/Button";


function ProductInfo({ product }) {
  const {cart , setCart } = useContext(CartContext)
  console.log(cart)
  const { user } = useUser()
  const router = useRouter()
  //Add data
  const handleAddToCart = () => {
    //Add data in strapi
    if(!user){
      router.push("/sign-in")
    }else{
      const data = {
        data : {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id]
        }
      }
      CartApis.addToCart(data).then(res => {
      console.log('cart created successfully' , res.data.data)
      setCart(oldCart => [
        ...oldCart,
        {
          id: res?.data?.data?.id,
          product
        }
      ])


      }).catch(error => {
      console.log('error' , error)
      })

    }
  }

  return (
    <div>
      {product?.id ? (
        <div className="px-5">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] max-h-auto">
            {product?.attributes?.title}
          </h1>
          <div className=" flex my-2">
            <AlignEndVertical />
            <h1 className="text-primary text-[15px]  md:text-[20px] mx-2">
              {product?.attributes?.category}
            </h1>
          </div>
          <p className="text-[12px]">{product?.attributes?.description[0]?.children[0]?.text}</p>
          <p className="py-5 text-[30px] text-primary">
            {product?.attributes?.price}€
          </p>
          <Button title={"Aggiungi nel carrello"} onClick={handleAddToCart}/>
          <p className="text-[10px] text-gray-400">Questo prodotto e stato aggiunto il: {product?.attributes?.publishedAt.substring(0, 10)}</p>
        </div>
      ) : (
        <Skelatonscreen />
      )}
    </div>
  );
}

export default ProductInfo;