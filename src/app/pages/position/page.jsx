import Button from "../../_components/Button";

function Position() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Dove ci troviamo
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
          Siamo situati nel cuore di Milano, Bellinzona e Bergamo, facilmente raggiungibili e ben collegate, pronte ad offrirvi il miglior servizio.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <div className="group relative block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179094.07220577952!2d9.012920351770799!3d45.462856166290194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilano%20MI%2C%20Italia!5e0!3m2!1sit!2sch!4v1719409026038!5m2!1sit!2sch"
                width="600"
                height="450"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Milano
                </h3>
                <Button 
                href="https://www.google.com/maps/place/Milano+MI,+Italia/@45.4628562,9.0129204,11z/data=!3m1!4b1!4m6!3m5!1s0x4786c1493f1275e7:0x3cffcd13c6740e8d!8m2!3d45.468503!4d9.1824027!16zL20vMDk0N2w?entry=ttu"
                title="Dove ci troviamo"
                target="_blank"
                />  
              </div>
            </div>
          </li>

          <li>
            <div className="group relative block">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176707.32207087736!2d8.873536420175936!3d46.20942239703308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47844bcafe66f73b%3A0xfe0f897d85044c14!2sBellinzona!5e0!3m2!1sit!2sch!4v1719410616767!5m2!1sit!2sch"
                width="600"
                height="450"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Bellinzona
                </h3>
                <Button 
                href="https://www.google.com/maps/place/Bellinzona/@46.2093032,9.0383481,12z/data=!3m1!4b1!4m6!3m5!1s0x47844bcafe66f73b:0xfe0f897d85044c14!8m2!3d46.1946216!4d9.0244124!16zL20vMDMzdjR2?entry=ttu"
                title="Dove ci troviamo"
                target="_blank"
                /> 
              </div>
            </div>
          </li>

          <li className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div href="#" className="group relative block">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44590.195806765725!2d9.625889757148645!3d45.69323490002883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47815111bc62ae73%3A0xd32fcb8f0be5a4d1!2sBergamo%20BG%2C%20Italia!5e0!3m2!1sit!2sch!4v1719410962006!5m2!1sit!2sch"
                width="600"
                height="450"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Bergamo
                </h3>
                <Button 
                href="https://www.google.com/maps/place/Bergamo+BG,+Italia/@45.6932349,9.6258898,13z/data=!3m1!4b1!4m6!3m5!1s0x47815111bc62ae73:0xd32fcb8f0be5a4d1!8m2!3d45.6941966!4d9.6707462!16zL20vMDFqcDRz?entry=ttu"
                title="Dove ci troviamo"
                target="_blank"
                /> 
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Position;

{
  /* <div>
  aspect-square w-full object-cover transition duration-500 group-hover:opacity-90
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179094.07220577952!2d9.012920351770799!3d45.462856166290194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilano%20MI%2C%20Italia!5e0!3m2!1sit!2sch!4v1719409026038!5m2!1sit!2sch"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
</div> */
}
