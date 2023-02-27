import React from "react";

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

class ClassOne extends React.Component {
  render() {
    const person = listOfPeople;
    return (
      <div className="div__four">
        <ol style={{ listStyleType: `lower-roman` }}>
          <li></li>
        </ol>
      </div>
    );
  }
}

export default ClassOne;
