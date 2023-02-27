import React from "react";
import PropTypes from "prop-types";
import Osoba from "./Osoba";
import Osoba2 from "./Osoba2";

export default class PopisOsoba extends React.Component {
  render() {
    const { popis } = this.props;
    return (
      <>
        <Osoba osoba={popis[0]} />;
        <Osoba2
          ime={popis[1].ime}
          prezime={popis[1].prezime}
          godine={popis[1].godine}
        />
      </>
    );
  }
}

PopisOsoba.propTypes = {
  popis: PropTypes.array,
};
