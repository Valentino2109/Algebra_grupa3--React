const listOfPeople = [
  { name: `Seljo`, surname: `Musavi`, age: 54 },
  { name: `Mutko`, surname: `Lopatich`, age: 34 },
  { name: `Traktor`, surname: `Blato`, age: 58 },
  { name: `Ashov`, surname: `Drekec`, age: 62 },
  { name: `Grablja`, surname: `Zgodnich`, age: 66 },
  { name: `Krampko`, surname: `Krampich`, age: 48 },
  { name: `Borer`, surname: `Rupich`, age: 41 },
  { name: `Bushich`, surname: `Elektrik`, age: 39 },
  { name: `Izolirko`, surname: `Ljepljivi`, age: 68 },
  { name: `Stolica`, surname: `Bor`, age: 50 },
];

function FuncTwo() {
  const person = listOfPeople;
  return (
    <div className="div__two">
      <ul>
        <li>
          Surname: {person[0].surname}, name: {person[0].name}, age:{" "}
          {person[0].age}
        </li>
        <li>
          Surname: {person[1].surname}, name: {person[1].name}, age:{" "}
          {person[1].age}
        </li>
        <li>
          Surname: {person[2].surname}, name: {person[2].name}, age:{" "}
          {person[2].age}
        </li>
        <li>
          Surname: {person[3].surname}, name: {person[3].name}, age:{" "}
          {person[3].age}
        </li>
        <li>
          Surname: {person[4].surname}, name: {person[4].name}, age:{" "}
          {person[4].age}
        </li>
        <li>
          Surname: {person[5].surname}, name: {person[5].name}, age:{" "}
          {person[5].age}
        </li>
        <li>
          Surname: {person[6].surname}, name: {person[6].name}, age:{" "}
          {person[6].age}
        </li>
        <li>
          Surname: {person[7].surname}, name: {person[7].name}, age:{" "}
          {person[7].age}
        </li>
        <li>
          Surname: {person[8].surname}, name: {person[8].name}, age:{" "}
          {person[8].age}
        </li>
        <li>
          Surname: {person[9].surname}, name: {person[9].name}, age:{" "}
          {person[9].age}
        </li>
      </ul>
    </div>
  );
}

export default FuncTwo;
