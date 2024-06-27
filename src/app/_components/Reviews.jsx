import ReviewsData from "../_data/ReviewsData";
import Image from "next/image";
import {Star}from "lucide-react"

function Reviews() {
  return (
    <>
          <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Recensioni recenti dei nostri clienti
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      {ReviewsData.map((info) => {
        return (
                <div className="rounded-lg bg-slate-200 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <Image src={info.img} alt="" width={50} height={50} className="rounded-3xl"/>
                    <div>
                    <div className="flex text-primary">
                      <Star size={20} strokeWidth={2}/>
                      <Star size={20} strokeWidth={2}/>
                      <Star size={20} strokeWidth={2}/>
                      <Star size={20} strokeWidth={2}/>
                      <Star size={20} strokeWidth={2}/>
                    </div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {info.name}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                  {info.comment}
                  </p>
                </div>

        );
      })}
              </div>
            </div>
          </section>
    </>
  );
}

export default Reviews;
