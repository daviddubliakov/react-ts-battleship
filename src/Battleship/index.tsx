import { useState } from "react";
import classNames from "classnames";

type FiledsType = (string | null | boolean)[][];

const DEFAULT_FIELDS: FiledsType = [
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
  const [personFields, setPersonFields] = useState<FiledsType>(DEFAULT_FIELDS);
  const [computerFields, setComputerFields] = useState<FiledsType>(
    DEFAULT_FIELDS
  );

  return (
    <div className="battleship__wrapper">
      <div className="player__wrapper">
        <h2>Your board</h2>

        <div className="player-board">
          {personFields.map((row, rowID) => (
            <div className="row" key={rowID}>
              {row.map((col, colID) => (
                <div
                  className={classNames("col", {
                    "play-cell": col === null || typeof col === "boolean",
                  })}
                  key={colID}
                >
                  {col}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="player__wrapper">
        <h2>Computer</h2>

        <div className="player-board">
          {computerFields.map((row, rowID) => (
            <div className="row" key={rowID}>
              {row.map((col, colID) => (
                <div
                  className={classNames("col", {
                    "play-cell": col === null || typeof col === "boolean",
                  })}
                  key={colID}
                >
                  {col}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Battleship;
