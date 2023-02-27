import FuncOne from "./components/FuncOne";
import FuncTwo from "./components/FuncTwo";
import FuncThree from "./components/FuncThree";
import ClassOne from "./components/ClassOne";
import "./style.css";

// List of 10 objects which contains name, surname and age

function App() {
  return (
    <div id="div__main">
      <FuncOne />
      <FuncTwo />
      <FuncThree />
      <ClassOne />
    </div>
  );
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
