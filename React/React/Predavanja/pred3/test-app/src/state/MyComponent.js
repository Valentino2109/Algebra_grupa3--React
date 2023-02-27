import React from "react";

export default class MyComponent extends React.Component {
  state = {
    city: "Zagreb",
    state: "Hrvatska",
    obj: {
      min: 22,
      max: 33,
    },
  };
  changeState = () => {
    const newCity = this.state.city === "Zagreb" ? "Osijek" : "Zagreb";
    this.setState({ city: newCity });
  };

  dontChangeLikeThis = () => {
    const newCity = this.state.city === "Zagreb" ? "Osijek" : "Zagreb";
    this.state.city = newCity;
  };

  changeObject = () => {
    const newMin = 10;
    this.setState({ obj: { min: newMin, max: 29 } });
  };

  render() {
    return (
      <div>
        <h1>Grad: {this.state.city}</h1>
        <h1>Država: {this.state.state}</h1>
        <p>Objekt: min = {this.state.obj.min}</p>
        <p>Objekt: max = {this.state.obj.max}</p>
        <button onClick={this.changeState}>Drugi grad</button>
        <button onClick={this.dontChangeLikeThis}>
          Drugi grad -- ne ovako
        </button>
        <button onClick={this.changeObject}>Promijeni</button>
      </div>
    );
  }
}
