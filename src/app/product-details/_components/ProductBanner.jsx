import Image from "next/image";

function ProductBanner({ product }) {
  return (
     <div>
      {product?.attributes?.banner?.data?.attributes?.url ?
       <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt={product?.attributes?.title}
          width={500}
          height={500}
          className="rounded-xl"
        /> : <div className="w-[500px] h-[500px] bg-primary rounded-xl animate-pulse overflow-2"></div>
      }
    </div>
  );
}

export default ProductBanner;
