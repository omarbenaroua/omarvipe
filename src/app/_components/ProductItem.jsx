import Image from "next/image";
import Link from "next/link";

function ProductItem({ product }) {
  console.log(product)
  return (
    <>
      <Link href={`/product-details/${product?.id}`}>
        <div className="group block m-2 shadow-xl border hover:border-black">
          <Image
            src={product?.attributes?.banner?.data?.attributes?.url}
            alt="banner-card"
            width={550}
            height={550}
            className="aspect-square w-full rounded object-cover"
          />
          <div className="mt-3 px-2 py-1">
            <p className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {product?.attributes?.title}
            </p>
            <p className="mt-1 text-sm text-gray-700">
              {product?.attributes?.price}€
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductItem;