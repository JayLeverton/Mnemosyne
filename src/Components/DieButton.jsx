import React from "react";

function DieButton({ diceSides, handleDiceClick }) {
  const clearFocusIndiscriminate = () => {
    document.activeElement.blur();
  };

  const handleFocus = (e) => {
    e.preventDefault();
    clearFocusIndiscriminate();
  };

  return (
    <button
      className="border-[1px] bg-slate-800 text-white text-center font-bold text-xs"
      onClick={() => handleDiceClick(diceSides)}
      onFocus={handleFocus}
    >
      D{diceSides}
    </button>
  );
}

export default DieButton;
