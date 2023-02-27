import PopisOsoba from "./z1/PopisOsoba";
import "./style.css";

const osobe = [
  { ime: `Pero`, prezime: `Peric`, godine: 45 },
  { ime: `Maja`, prezime: `Majic`, godine: 21 },
];

function App() {
  return <div id="div__main">{<PopisOsoba popis={osobe} />}</div>;
}
export default App;

/*
Zadaća React1
Napraviti react aplikaciju. 
Napraviti 6 komponenti. 3 function i 3 class. 

U app.js napraviti listu od 10 objekata osobe od kojih je svaki objekt takav da ima ime, prezime i godine.

Potom proslijediti svaki od objekata u neku od 6 napravljenih komponenti (koristiti props). 
komponente trebaju svaka na svoj način (6 komponenti, 6 načina) prikazati podatke korisnika (npr, ime i prezime; pa prezime i ime; pa ime i godine; pa unordered lista ime, prezime, godine; upotrijebite maštu). 
Svaka komponenta treba imati definirani propTypes i defaultProps ako isti imaju smisla. 

Dodatno: instalirati barem 3 npm paketa (bilo koja) te svaki od istih upotrijebiti na barem jednom mjestu u aplikaciji.
*/
