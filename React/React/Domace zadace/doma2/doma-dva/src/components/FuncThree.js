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

function FuncThree() {
  const person = listOfPeople;
  return (
    <div className="div__three">
      <ul style={{ listStyleType: `circle` }}>
        <li>
          Age: {person[0].age}, name: {person[0].name}, surname:{" "}
          {person[0].surname}
        </li>
        <li>
          Age: {person[1].age}, name: {person[1].name}, surname:{" "}
          {person[1].surname}
        </li>
        <li>
          Age: {person[2].age}, name: {person[2].name}, surname:{" "}
          {person[2].surname}
        </li>
        <li>
          Age: {person[3].age}, name: {person[3].name}, surname:{" "}
          {person[3].surname}
        </li>
        <li>
          Age: {person[4].age}, name: {person[4].name}, surname:{" "}
          {person[4].surname}
        </li>
        <li>
          Age: {person[5].age}, name: {person[5].name}, surname:{" "}
          {person[5].surname}
        </li>
        <li>
          Age: {person[6].age}, name: {person[6].name}, surname:{" "}
          {person[6].surname}
        </li>
        <li>
          Age: {person[7].age}, name: {person[7].name}, surname:{" "}
          {person[7].surname}
        </li>
        <li>
          Age: {person[8].age}, name: {person[8].name}, surname:{" "}
          {person[8].surname}
        </li>
        <li>
          Age: {person[9].age}, name: {person[9].name}, surname:{" "}
          {person[9].surname}
        </li>
      </ul>
    </div>
  );
}

export default FuncThree;
