import { useState } from "react";
import Osoba from "./Osoba";

export default function OsobeList() {
  const [korisnici, setKorisnici] = useState([
    { ime: `Pero`, prezime: `Peric`, godine: 33 },
    { ime: `Vitomir`, prezime: `Ogonol`, godine: 56 },
    { ime: `Karolina`, prezime: `Baluk`, godine: 11 },
    { ime: `Tomislava`, prezime: `Org`, godine: 33 },
  ]);

  return (
    <div>
      {korisnici.map((korisnik, index) => {
        return <Osoba key={index} osoba={korisnik} />;
      })}
    </div>
  );
}
