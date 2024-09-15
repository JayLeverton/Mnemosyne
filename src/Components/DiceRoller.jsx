import { useContext, useState } from "react";
import CloseSVG from "./SVGs/CloseSVG";
import {
  diceRollerVisibilityContext,
  diceRollInstancesContext,
  // userModsContext,
} from "../Context";
import DiceRollInstance from "./DiceRollInstance";

function DiceRoller() {
  const { setDiceRollerFalse, setDiceRollerTrue } = useContext(
    diceRollerVisibilityContext
  );

  const { diceRollInstances } = useContext(diceRollInstancesContext);

  return (
    <div className="fixed overscroll-contain grid-rows-3 w-7/12 right-0 bottom-0 m-2 h-[26rem] bg-slate-800 opacity-[99%]">
      <div className="flex flex-col h-full">
        <div className="sticky top-0 grid grid-rows-1 grid-cols-7 h-8 border-b-2  border-black w-full gap-x-0.5">
          <button className="bg-white text-black text-center font-bold text-xs">
            D4
          </button>
          <button className="bg-white text-black text-center font-bold text-xs">
            D6
          </button>
          <button className="bg-white text-black text-center font-bold text-xs">
            D8
          </button>
          <button className="bg-white text-black text-center font-bold text-xs">
            D10
          </button>
          <button className="bg-white text-black text-center font-bold text-xs">
            D12
          </button>
          <button className="bg-white text-black text-center font-bold text-xs">
            D100
          </button>
          <button className="bg-black" onClick={setDiceRollerFalse}>
            <CloseSVG />
          </button>
        </div>

        <div className="flex flex-grow flex-col-reverse bg-gray-800 overflow-y-auto m-1">
          {/* here is where instances populate */}

          {diceRollInstances &&
            diceRollInstances.map((instance, index) => (
              <DiceRollInstance
                key={index}
                rollType={instance.rollType}
                result={instance.result}
                tempRoll={instance.tempRoll}
                scoreModifier={instance.scoreModifier}
              />
            ))}
        </div>

        <input className="flex min-h-8 h-8 pt-4 border-[1px] bg-gray-800 border-white"></input>
      </div>
    </div>
  );
}

export default DiceRoller;
