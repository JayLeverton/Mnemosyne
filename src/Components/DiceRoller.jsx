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
      if (tempRollFormula != "") {
        rollDice(tempRollFormula);
        addNonStatDiceRollInstance();
        clearTempRollFormula();
      }
    }
  };

  //
  // Dice button functions
  const updateFormulaWithDice = (tempRollFormula, sides) => {
    const diceRegex = new RegExp(`\\b(\\d*)d${sides}\\b`);
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
    const operatorRegex = /([+\-*/]?\s*\d+)/g;

    const diceParts = [...formula.matchAll(diceRegex)];

    const formulaWithoutDice = formula.replace(diceRegex, "");

    const operatorParts = formulaWithoutDice.match(operatorRegex) || [];

    const results = [];
    let totalSum = 0;
    let operationSum = 0;

    diceParts.forEach((part) => {
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
        type: "dice",
        dice: `d${sides}`,
        originalRolls,
        rolls,
        sum,
      });
    });

    // Handle arithmetic operations
    operatorParts.forEach((operation, index) => {
      let operator = operation.trim()[0];
      let value = parseInt(operation.replace(/[+\-*/]/, "").trim(), 10);

      // First number should not have an operator and should only be added once
      if (index === 0 && !/[+\-*/]/.test(operator)) {
        totalSum += value; // Directly add the value
        results.push({
          type: "operation",
          value: `${value}`,
        });
      } else {
        switch (operator) {
          case "+":
            totalSum += value;
            break;
          case "-":
            totalSum -= value;
            break;
          case "*":
            totalSum *= value;
            break;
          case "/":
            totalSum = Math.floor(totalSum / value); // Integer division
            break;
          default:
            break;
        }

        results.push({
          type: "operation",
          value: `${operator}${value}`,
        });
      }
    });

    // Prepare summands, correctly formatting dice and operations
    let summands = results.map((result) => {
      if (result.type === "dice") {
        return `${result.originalRolls.join("]+[")}`;
      } else if (result.type === "operation") {
        return result.value;
      }
    });

    return { totalSum, results, summands };
  };

  return (
    <div className="fixed overscroll-contain grid-rows-3 w-[61%] right-0 bottom-0 m-2 h-[34rem] bg-slate-800 opacity-[99%]">
      <div className="flex flex-col h-full">
        <div className="sticky top-0 grid auto-rows-auto grid-rows-2 grid-cols-4 h-26 border-b-2 border-black w-full">
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
          <DieButton
            diceSides="100"
            setTempRollFormula={setTempRollFormula}
            handleDiceClick={handleDiceClick}
          ></DieButton>
          <button
            className="border-[1px] bg-slate-900"
            onClick={setDiceRollerFalse}
          >
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
          className="flex text-sm pl-2 min-h-8 h-8 border-[1px] bg-gray-800 border-white placeholder-gray-500"
          value={tempRollFormula}
          onChange={(e) => setTempRollFormula(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="4d6 or 73-37 or 10d52+29"
          ref={formulaInputRef}
        ></input>
      </div>
    </div>
  );
}

export default DiceRoller;
