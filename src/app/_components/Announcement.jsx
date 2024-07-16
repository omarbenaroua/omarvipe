"use client";
import { useState , useEffect } from "react";
import { X , ShieldAlert} from "lucide-react";

function Announcement() {
  const [Announcement, setAnnouncement] = useState(true);
  const CloseAnnouncement = () => Announcement && setVisible(false);
  const [currentURL, setcurrentURL] = useState(window.location.href);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000)}, []);

  return (
    <>
      {visible &&  currentURL === "http://localhost:3000/" || currentURL === "https://omarvipe.vercel.app/product-details/" ? (
        <div className="flex items-center justify-between gap-4 bg-primary px-4 py-1 text-white duration-75 animate-pulse">
          <a href="/product-details" className="inline-block underline p-1">
          <p className="text-sm font-medium flex items-center justify-between">
          <ShieldAlert />
          Il caricamento di tutti i prodotti potrebbe richiedere fino a 2 minuti a causa dell'uso di piani gratuiti.
          </p></a>
          <button
            onClick={CloseAnnouncement}
            className="rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
          >
            <X size={15} strokeWidth={3} />
          </button>
        </div>
      ): " "}
    </>
  );
}

export default Announcement;
