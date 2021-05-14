import React, { useState } from "react";

const DEFAULT_FIELDS = [
  ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
  ["1", null, null, null, null, null, null, null, null, null, null],
  ["2", null, null, null, null, null, null, null, null, null, null],
  ["3", null, null, null, null, null, null, null, null, null, null],
  ["4", null, null, null, null, null, null, null, null, null, null],
  ["5", null, null, null, null, null, null, null, null, null, null],
  ["6", null, null, null, null, null, null, null, null, null, null],
  ["7", null, null, null, null, null, null, null, null, null, null],
  ["8", null, null, null, null, null, null, null, null, null, null],
  ["9", null, null, null, null, null, null, null, null, null, null],
  ["10", null, null, null, null, null, null, null, null, null, null],
];

const Battleship = () => {
  const [personFields, setPersonFields] = useState(DEFAULT_FIELDS);
  const [computerFields, setComputerFields] = useState(DEFAULT_FIELDS);

  return <div className="wrapper">Battleship</div>;
};

export default Battleship;
