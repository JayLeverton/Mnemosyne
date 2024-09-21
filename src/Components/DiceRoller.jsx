import { useContext, useRef, useState } from "react";
import CloseSVG from "./SVGs/CloseSVG";
import {
  diceRollerVisibilityContext,
  diceRollInstancesContext,
  // userModsContext,
} from "../Context";
import DiceRollInstance from "./DiceRollInstance";
import DieButton from "./DieButton";

function DiceRoller() {
  const formulaInputRef = useRef(null);

  const { setDiceRollerFalse, setDiceRollerTrue } = useContext(
    diceRollerVisibilityContext
  );

  const { diceRollInstances, setDiceRollInstances } = useContext(
    diceRollInstancesContext
  );

  const [tempRollFormula, setTempRollFormula] = useState("");

  const clearTempRollFormula = () => {
    setTempRollFormula("");
  };

  const addNonStatDiceRollInstance = (
    rollType = null,
    scoreModifier = null
  ) => {
    const { totalSum, summands } = rollDice(tempRollFormula);
    const flattenedSummands = summands.flat();
    const formattedSummands = flattenedSummands.join("]+[");

    setDiceRollInstances((prevInstances) => [
      {
        rollType,
        result: totalSum,
        tempRoll: formattedSummands,
        scoreModifier,
      },
      ...prevInstances,
    ]);

    console.log(formattedSummands);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      rollDice(tempRollFormula);
      addNonStatDiceRollInstance();
      clearTempRollFormula();
    }
  };

  //
  // Dice button functions
  const updateFormulaWithDice = (tempRollFormula, sides) => {
    const diceRegex = new RegExp(`(\\d*)d${sides}`);
    const match = tempRollFormula.match(diceRegex);

    if (match) {
      const count = match[1] === "" ? 1 : parseInt(match[1], 10);
      return tempRollFormula.replace(diceRegex, `${count + 1}d${sides}`);
    } else {
      // Check if tempRollFormula is empty
      if (tempRollFormula.trim() === "") {
        return `1d${sides}`; // Just add the new dice without " + "
      } else {
        return tempRollFormula + ` + 1d${sides}`;
      }
    }
  };

  const handleDiceClick = (sides) => {
    const updatedFormula = updateFormulaWithDice(tempRollFormula, sides);
    setTempRollFormula(updatedFormula);
    formulaInputRef.current.focus();
  };

  //
  // Full roll function
  const rollDice = (formula) => {
    const diceRegex = /(\d*)d(\d+)(kh\d+|dl\d+)?/g;
    const parts = [...formula.matchAll(diceRegex)];
    const results = [];
    let totalSum = 0;

    parts.forEach((part) => {
      const count = part[1] === "" ? 1 : parseInt(part[1], 10); // How many dice to roll
      const sides = parseInt(part[2], 10); // Dice sides
      let rolls = [];

      // Roll the dice
      for (let i = 0; i < count; i++) {
        rolls.push(Math.floor(Math.random() * sides) + 1);
      }

      const originalRolls = [...rolls];

      // Apply modifiers like "keep highest" or "drop lowest"
      if (part[3]) {
        const modifier = part[3];
        if (modifier.startsWith("kh")) {
          const keep = parseInt(modifier.slice(2), 10);
          rolls.sort((a, b) => b - a);
          rolls = rolls.slice(0, keep);
        } else if (modifier.startsWith("dl")) {
          const drop = parseInt(modifier.slice(2), 10);
          rolls.sort((a, b) => a - b);
          rolls = rolls.slice(drop);
        }
      }

      const sum = rolls.reduce((sum, roll) => sum + roll, 0);
      totalSum += sum;

      results.push({
        dice: `d${sides}`,
        originalRolls,
        rolls,
        sum,
      });
    });

    let summands = results.map((result) => {
      return result.originalRolls.join("]+[");
    });

    return { totalSum, results, summands };
  };

  return (
    <div className="fixed overscroll-contain grid-rows-3 w-7/12 right-0 bottom-0 m-2 h-[26rem] bg-slate-800 opacity-[99%]">
      <div className="flex flex-col h-full">
        <div className="sticky top-0 grid grid-rows-1 grid-cols-7 h-8 border-b-2 border-black w-full gap-x-0.5">
          <DieButton
            diceSides="4"
            setTempRollFormula={setTempRollFormula}
            handleDiceClick={handleDiceClick}
          ></DieButton>
          <DieButton
            diceSides="6"
            setTempRollFormula={setTempRollFormula}
            handleDiceClick={handleDiceClick}
          ></DieButton>
          <DieButton
            diceSides="8"
            setTempRollFormula={setTempRollFormula}
            handleDiceClick={handleDiceClick}
          ></DieButton>
          <DieButton
            diceSides="10"
            setTempRollFormula={setTempRollFormula}
            handleDiceClick={handleDiceClick}
          ></DieButton>
          <DieButton
            diceSides="12"
            setTempRollFormula={setTempRollFormula}
            handleDiceClick={handleDiceClick}
          ></DieButton>
          <DieButton
            diceSides="20"
            setTempRollFormula={setTempRollFormula}
            handleDiceClick={handleDiceClick}
          ></DieButton>
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
        <input
          id="formulaInput"
          className="flex pl-2 min-h-8 h-8 border-[1px] bg-gray-800 border-white placeholder-gray-500"
          value={tempRollFormula}
          onChange={(e) => setTempRollFormula(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='4d6dl or "/help"'
          ref={formulaInputRef}
        ></input>
      </div>
    </div>
  );
}

export default DiceRoller;
