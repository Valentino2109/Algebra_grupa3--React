// { ime: `Pero`, prezime: `Peric`, godine: 33 },

export default function Osoba({ osoba }) {
  return (
    <p>
      {osoba.ime} | {osoba.prezime} | {osoba.godine}
    </p>
  );
}
