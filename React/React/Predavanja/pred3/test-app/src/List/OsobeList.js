export default function OsobeList() {
  const korisnici = [
    { ime: `Pero`, prezime: `Peric`, godine: 33 },
    { ime: `Vitomir`, prezime: `Ogonol`, godine: 56 },
    { ime: `Karolina`, prezime: `Baluk`, godine: 11 },
    { ime: `Tomislava`, prezime: `Org`, godine: 33 },
  ];

  return (
    <div>
      {korisnici.map((k, i) => {
        return (
          <p key={i}>
            {k.ime} {k.prezime}: {k.godine} god
          </p>
        );
      })}
    </div>
  );
}
