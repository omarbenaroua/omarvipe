import { SignIn } from "@clerk/nextjs";
import Logo from "../../../../../public/logo.png";
import Image from "next/image";
import Cover from "../../../../../public/coverSignin.jpg";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            src={Cover}
            alt="cover"
            width={700}
            height={700}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <Image src={Logo} alt="logo" width={110} height={50} />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Benvenuti!!!!
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Benvenuti nel nostro negozio di sigarette elettroniche, dove
              qualità e innovazione si incontrano. Scoprite una vasta gamma di
              dispositivi e liquidi premium, selezionati per offrirvi la
              migliore esperienza di svapo.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <SignIn />
        </main>
      </div>
    </section>
  );
}
