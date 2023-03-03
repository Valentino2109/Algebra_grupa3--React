// { ime: `Pero`, prezime: `Peric`, godine: 33 },
export default function Osoba({
  osoba,
  onChangeIme,
  onChangePrezime,
  onChangeGodine,
  index,
}) {
  const handleChangeIme = (e) => {
    onChangeIme(e.target.value);
  };

  const handleChangePrezime = (e) => {
    onChangePrezime(e.target.value);
  };

  const handleChangeGodine = (e) => {
    onChangeGodine(e.target.value);
  };

  return (
    <p>
      <input
        value={osoba.ime}
        onChange={(tekst) => handleChangeIme(tekst, index)}
      />
      <input
        value={osoba.prezime}
        onChange={(tekst) => handleChangePrezime(tekst, index)}
      />
      <input
        input="number"
        value={osoba.godine}
        onChange={(tekst) => handleChangeGodine(tekst, index)}
      />
    </p>
  );
}
