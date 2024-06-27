import {ShoppingBasket , UserRoundSearch , Info , BookOpenCheck , Percent , UserPlus } from "lucide-react";

const ServicesData = [
  {
    id: 1,
    title: "Vendita",
    text: "Vendita di prodotti di sigarette elettroniche.",
    icon: <ShoppingBasket/>,
  },
  {
    id: 2,
    title: "Assistenza",
    text: "Assistenza clienti tramite chat, email e telefono",
    icon: <UserRoundSearch/>,
  },
  {
    id: 3,
    title: "Informazioni",
    text: "Fornitura di informazioni dettagliate sui prodotti disponibili",
    icon: <Info/>,
  },
  {
    id: 4,
    title: "Guida",
    text: "Offerta di guide sull'uso e consigli per l'acquisto.",
    icon: <BookOpenCheck />,
  },
  {
    id: 5,
    title: "Promozioni",
    text: "Promozioni speciali, sconti e pacchetti vantaggiosi",
    icon: <Percent />,
  },
  {
    id: 6,
    title: "Community",
    text: "Creazione di una community online per condivisione e supporto.",
    icon: <UserPlus />,
  },
];

export default ServicesData;
