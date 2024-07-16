import Botton from './Button'

function Hero() {
  return (
    <>
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Sigarette Eletroniche
              <strong className="font-extrabold text-primary sm:block">
              Tutto cio che ti serve per fumare in alta qualita
              </strong>
            </h1>
            <p className="mt-4 sm:text-xl/relaxed">
            Cigalike - Box Mod - Pod Mod - Vape Pen - Starter Kit - Kit Completi
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Botton href={"/product-details"} title={"Prodotti"}/>
            <Botton href={"/pages/position"} title={"Dove ci troviamo"}/>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Hero