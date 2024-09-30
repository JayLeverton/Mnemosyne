import React, { useContext, useState } from "react";
import {
  abilityScoresContext,
  combatStatsContext,
  diceRollerVisibilityContext,
  diceRollInstancesContext,
} from "../Context";

const HitDie = ({ showHitDieModal, setShowHitDieModal }) => {
  const { combatStats, setCombatStats } = useContext(combatStatsContext);
  const { diceRollInstances, setDiceRollInstances } = useContext(
    diceRollInstancesContext
  );
  const { setDiceRollerFalse, setDiceRollerTrue } = useContext(
    diceRollerVisibilityContext
  );
  const { abilityScores, setAbilityScores } = useContext(abilityScoresContext);

  const incrementHitDie = (key) => {
    if (combatStats.currentHitDie[key] < combatStats.maxHitDie[key]) {
      setCombatStats((prevCombatStats) => ({
        ...prevCombatStats,
        currentHitDie: {
          ...prevCombatStats.currentHitDie,
          [key]: prevCombatStats.currentHitDie[key] + 1,
        },
      }));
    } else {
      console.log(
        "You currently have " +
          combatStats.currentHitDie[key] +
          " " +
          key +
          " hit dice"
      );
    }
  };

  const decrementHitDie = (key) => {
    if (combatStats.currentHitDie[key] > 0) {
      setCombatStats((prevCombatStats) => ({
        ...prevCombatStats,
        currentHitDie: {
          ...prevCombatStats.currentHitDie,
          [key]: prevCombatStats.currentHitDie[key] - 1,
        },
      }));
      rollHitDie(key);
      setDiceRollerTrue();
    } else {
      console.log(
        "You currently have " +
          combatStats.currentHitDie[key] +
          " " +
          key +
          " hit dice"
      );
    }
  };

  const addDiceRollInstance = (rollType, result, tempRoll, scoreModifier) => {
    setDiceRollInstances((prevInstances) => [
      { rollType, result, tempRoll, scoreModifier },
      ...prevInstances,
    ]);
  };

  const rollHitDie = (key) => {
    const sidesInt = parseInt(key.replace(/d/g, ""));
    const hitDieRoll = Math.floor(Math.random() * sidesInt) + 1;
    const hitDieRollResult =
      hitDieRoll + Math.floor((abilityScores.Constitution - 10) / 2);

    addDiceRollInstance(
      `${key} Hit Die`,
      hitDieRollResult,
      hitDieRoll,
      Math.floor((abilityScores.Constitution - 10) / 2)
    );
  };

  return (
    <div className="grid text-center m-1">
      {Object.entries(combatStats.currentHitDie).map(([key, value]) => {
        //
        // Only render if maxValue is greater than 0
        if (combatStats.maxHitDie[key] > 0) {
          return (
            <div
              className="flex flex-col justify-evenly relative mb-1"
              key={key}
            >
              <div className="flex mx-auto text-center justify-start font-bold text-sm my-auto">
                {key}:
              </div>
              <div className="grid place-items-center text-center justify-self-center">
                <div className="grid grid-flow-col">
                  <button
                    className="w-6 h-6 mx-1 border-[1px] text-center bg-slate-950"
                    onClick={() => {
                      decrementHitDie(key);
                    }}
                  >
                    -
                  </button>
                  <div className="flex text-center justify-center bg-zinc-900 px-1 mx-1">
                    {value}/{combatStats.maxHitDie[key]}
                  </div>
                  <button
                    className="w-6 h-6 mx-1 border-[1px] text-center bg-slate-950"
                    onClick={() => {
                      incrementHitDie(key);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        }
        return null; // Return null for cases where maxValue is 0
      })}
    </div>
  );
};

export default HitDie;
