import { PaymentElement } from "@stripe/react-stripe-js";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";

function CheckoutForm() {
  const [confirmation, setconfirmation] = useState(false);
  const badgeCheck = () => setconfirmation(true);

  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid gap-x-16 gap-y-8">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    onClick={badgeCheck}
                    className="inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                  {confirmation && (
                    <div>
                      <BadgeCheck />
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <form>
        <div className="md:mx-[320px] m-32">
          <PaymentElement />
          <button className="bg-primary text-white py-1 w-full m-1 shadow-lg rounded-md">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default CheckoutForm;
