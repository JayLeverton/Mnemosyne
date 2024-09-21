import React from "react";

function DieButton({ diceSides, setTempRollFormula, handleDiceClick }) {
  return (
    <button
      className="bg-white text-black text-center font-bold text-xs"
      onClick={() => handleDiceClick(diceSides)}
    >
      D{diceSides}
    </button>
  );
}

export default DieButton;
