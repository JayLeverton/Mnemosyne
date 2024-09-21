import React from "react";

function DieButton({ diceSides, setTempRollFormula, handleDiceClick }) {
  const handleFocus = (e) => {
    e.preventDefault(); // Prevent focus
  };

  return (
    <button
      className=" focus: bg-white text-black text-center font-bold text-xs"
      onClick={() => handleDiceClick(diceSides)}
      onFocus={handleFocus}
    >
      D{diceSides}
    </button>
  );
}

export default DieButton;
