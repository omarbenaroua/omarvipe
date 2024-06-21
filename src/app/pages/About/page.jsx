import React from 'react'
import Image from 'next/image'
import Cover from '../../../../public/coverSignin.jpg'
import Button from '../../_components/Button'

function about() {
  return (
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-100 sm:h-80 lg:h-full">
          <Image src={Cover}/>
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Benvenuti da OmarVipe, il vostro negozio di fiducia per sigarette elettroniche e accessori.
          </h2>

          <p className="mt-4 text-gray-600">
          Situato nel cuore della città, siamo orgogliosi di offrire una vasta gamma di prodotti di alta 
          qualità per soddisfare ogni esigenza di svapo, sia per i principianti che per i vapers esperti.
          La nostra missione è semplice: fornire ai nostri clienti le migliori sigarette elettroniche e 
          liquidi disponibili sul mercato, garantendo sempre sicurezza, qualità e innovazione. Crediamo 
          che il passaggio dalle sigarette tradizionali alle sigarette elettroniche possa migliorare la 
          qualità della vita, e siamo qui per supportarvi in ogni passo di questo percorso.
          Da OmarVipe, troverete una selezione accurata di sigarette elettroniche: dai modelli starter kit
           per i nuovi vapers, ai modelli avanzati per chi cerca performance superiori. Offriamo liquidi 
           per sigarette elettroniche con una vasta gamma di aromi e livelli di nicotina, tutti 
           rigorosamente testati e conformi alle normative europee. Disponiamo anche di accessori come 
           batterie, coil, atomizzatori e tutto ciò di cui avete bisogno per personalizzare e mantenere il
           vostro dispositivo. Inoltre, proponiamo dispositivi pod, compatti, facili da usare e ideali per 
           chi è sempre in movimento.Qualità Garantita: Collaboriamo solo con i migliori produttori per 
           offrirvi prodotti sicuri e certificati. Assistenza Clienti Eccellente: Il nostro team è sempre 
           disponibile per offrirvi consigli personalizzati e assistenza post-vendita.

          </p>
          <div className='py-3'>
          <Button href="/product-details"   title="I nostri prodotti"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default about