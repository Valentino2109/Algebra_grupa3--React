import { useState } from "react";
import Osoba from "./Osoba";

const id = 4;

export default function OsobeList() {
  const [korisnici, setKorisnici] = useState([
    { id: 1, ime: `Pero`, prezime: `Peric`, godine: 33 },
    { id: 2, ime: `Vitomir`, prezime: `Ogonol`, godine: 56 },
    { id: 3, ime: `Karolina`, prezime: `Baluk`, godine: 11 },
    { id: 4, ime: `Tomislava`, prezime: `Org`, godine: 33 },
  ]);

  const handleChangeIme = (tekst, index) => {
    const noviKorisnici = [...korisnici];
    noviKorisnici[index].ime = tekst;
    setKorisnici(noviKorisnici);
  };

  const handleChangePrezime = (tekst, index) => {
    const noviKorisnici = [...korisnici];
    noviKorisnici[index].prezime = tekst;
    setKorisnici(noviKorisnici);
  };

  const handleChangeGodine = (tekst, index) => {
    const noviKorisnici = [...korisnici];
    noviKorisnici[index].godine = tekst;
    setKorisnici(noviKorisnici);
  };

  return (
    <div>
      {korisnici.map((korisnik, index) => {
        return (
          <div>
            <p>
              {korisnik.ime} | {korisnik.prezime} | {korisnik.godine}
            </p>
            <Osoba
              key={korisnik.id}
              osoba={korisnik}
              onChangeIme={handleChangeIme}
              onChangePrezime={handleChangePrezime}
              onChangeGodine={handleChangeGodine}
            />
          </div>
        );
      })}
    </div>
  );
}
