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

function FuncOne() {
  const person = listOfPeople;
  return (
    <div className="div__one">
      <ul style={{ listStyleType: `square` }}>
        <li>
          Name: {person[0].name}, surname: {person[0].surname}, age:{" "}
          {person[0].age}
        </li>
        <li>
          Name: {person[1].name}, surname: {person[1].surname}, age:{" "}
          {person[1].age}
        </li>
        <li>
          Name: {person[2].name}, surname: {person[2].surname}, age:{" "}
          {person[2].age}
        </li>
        <li>
          Name: {person[3].name}, surname: {person[3].surname}, age:{" "}
          {person[3].age}
        </li>
        <li>
          Name: {person[4].name}, surname: {person[4].surname}, age:{" "}
          {person[4].age}
        </li>
        <li>
          Name: {person[5].name}, surname: {person[5].surname}, age:{" "}
          {person[5].age}
        </li>
        <li>
          Name: {person[6].name}, surname: {person[6].surname}, age:{" "}
          {person[6].age}
        </li>
        <li>
          Name: {person[7].name}, surname: {person[7].surname}, age:{" "}
          {person[7].age}
        </li>
        <li>
          Name: {person[8].name}, surname: {person[8].surname}, age:{" "}
          {person[8].age}
        </li>
        <li>
          Name: {person[9].name}, surname: {person[9].surname}, age:{" "}
          {person[9].age}
        </li>
      </ul>
    </div>
  );
}

export default FuncOne;
