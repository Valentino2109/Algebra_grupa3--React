import PropTypes from "prop-types";
import React from "react";

export default function Osoba2({ ime, prezime, godine }) {
  return (
    <p>
      Ime: {ime}
      <br />
      Prezime: {prezime}
      <br />
      Godine: {godine}
    </p>
  );
}

Osoba2.propTypes = {
  osoba: PropTypes.object,
};
