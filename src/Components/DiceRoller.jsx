import { useContext, useState } from "react";
import CloseSVG from "./SVGs/CloseSVG";
import {
  diceRollerVisibilityContext,
  // userModsContext,
} from "../Context";
import DiceRollInstance from "./DiceRollInstance";

function DiceRoller() {
  const { setDiceRollerFalse, setDiceRollerTrue } = useContext(
    diceRollerVisibilityContext
  );
  return (
    <div className="fixed overscroll-contain grid-rows-3 w-7/12 right-0 bottom-0 m-2 h-[26rem] border-2 bg-slate-900 opacity-[99%]">
      <div className="flex flex-col h-full">
        <div className="sticky top-0 grid grid-rows-1 grid-cols-7 h-8 border-b-2 border-blue-500 w-full gap-x-0.5">
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

        <div className="flex flex-grow flex-col-reverse bg-slate-800 gap-1 overflow-y-auto">
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
          <DiceRollInstance></DiceRollInstance>
        </div>

        <input className="flex min-h-8 h-8 pt-4 border-t-2 bg-slate-400 border-white"></input>
      </div>
    </div>
  );
}

export default DiceRoller;
