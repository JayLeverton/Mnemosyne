import React, { useContext, useState } from "react";
import { combatStatsContext } from "../Context";

const HitDie = ({ showHitDieModal, setShowHitDieModal }) => {
  const { combatStats, setCombatStats } = useContext(combatStatsContext);

  return (
    <div className="grid text-center m-1 text-sm">
      {/*  */}
      {/* Actual code */}
      {Object.entries(combatStats.currentHitDie).map(([key, value]) => {
        //
        // Only render if maxValue is greater than 0
        // combatStats.maxHitDie[key] > 0
        if (combatStats.maxHitDie[key] > 0) {
          return (
            <div
              className="flex justify-evenly relative mb-[0.05rem]"
              key={key}
            >
              <div className="flex mr-auto text-center justify-start">
                {key}:
              </div>
              <div className="grid absolute left-1/2 transform -translate-x-1/2 text-center justify-self-center">
                <div className="grid grid-flow-col">
                  <button className="w-5 h-5 border-[1px] bg-slate-950 self-center"></button>
                  {value}
                  <button className="w-5 h-5 border-[1px] bg-slate-950 self-center"></button>
                </div>
              </div>
              <div className="flex text-center justify-self-end">
                /{combatStats.maxHitDie[key]}
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
