import ServicesData from "../../_data/ServicesData";
import Button from "../../_components/Button";
import Reviews from "../../_components/Reviews";


function Team() {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Tutti i servizi che offriamo
              </h2>

              <p className="mt-4 text-gray-600">
                Scopri tutti i servizi che offriamo, tra cui la vendita di
                sigarette elettroniche, assistenza clienti dedicata,
                informazioni dettagliate sui prodotti, guide all'uso, promozioni
                speciali e una community online attiva.
              </p>
              <Button href="/pages/about" title="La nostra storia"> 
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {ServicesData.map((info) => {
                return (
                  <div className="block rounded-xl border-2 border-gray-100 p-4 shadow-sm hover:border-primary">
                    <div className="inline-block rounded-lg bg-gray-50 p-3">
                      {info.icon}
                    </div>
                    <h2 className="mt-2 font-bold">{info.title}</h2>
                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                      {info.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Reviews />
    </>
  );
}

export default Team;
