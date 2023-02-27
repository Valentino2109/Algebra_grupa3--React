import PropTypes from "prop-types";
import React from "react";

export default function Osoba({ osoba }) {
  return (
    <p>
      Ime: {osoba.ime}
      <br />
      Prezime: {osoba.prezime}
      <br />
      Godine: {osoba.godine}
    </p>
  );
}

Osoba.propTypes = {
  osoba: PropTypes.object,
};
