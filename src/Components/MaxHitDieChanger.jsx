import React, { useContext } from "react";
import { combatStatsContext } from "../Context";

const MaxHitDieChanger = ({ operation, hitDie }) => {
  const { combatStats, setCombatStats } = useContext(combatStatsContext);

  const decrementHitDie = () => {
    setCombatStats((prevCombatStats) => ({
      ...prevCombatStats,
      maxHitDie: {
        ...prevCombatStats.maxHitDie,
        [hitDie]: Math.max(prevCombatStats.maxHitDie[hitDie] - 1, 0),
      },
    }));
  };

  const incrementHitDie = () => {
    setCombatStats((prevCombatStats) => ({
      ...prevCombatStats,
      maxHitDie: {
        ...prevCombatStats.maxHitDie,
        [hitDie]:
          prevCombatStats.maxHitDie[hitDie] < 99
            ? prevCombatStats.maxHitDie[hitDie] + 1
            : prevCombatStats.maxHitDie[hitDie],
      },
    }));
  };

  const handleClick = () => {
    if (operation === "decrement") {
      decrementHitDie();
    } else {
      incrementHitDie();
    }
  };

  return (
    <div>
      <button className="" onClick={handleClick}>
        {operation === "decrement" ? "-" : "+"}
      </button>
    </div>
  );
};

export default MaxHitDieChanger;
