"use client";
import { useState } from "react";
import { X } from "lucide-react";

function Announcement() {
  const [Announcement, setAnnouncement] = useState(true);
  const CloseAnnouncement = () => Announcement && setAnnouncement(false);
  /* const [currentURL, setcurrentURL] = useState(window.location.href); */
  return (
    <>
      {Announcement /*&&  currentURL === "https://omarvipe.vercel.app/" */ ? (
        <div className="flex items-center justify-between gap-4 bg-primary px-4 py-1 text-white">
          <p className="text-sm font-medium">
            Ti sei appena iscritto? Hai subito diritto a uno sconto del 20%{" "}
            <a href="/product-details" className="inline-block underline">
              su tutti i nostri prodotti!
            </a>
          </p>
          <button
            onClick={CloseAnnouncement}
            className="rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
          >
            <X size={15} strokeWidth={3} />
          </button>
        </div>
      ):""}
    </>
  );
}

export default Announcement;
