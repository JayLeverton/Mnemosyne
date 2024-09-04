import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import {
  abilityScoresContext,
  proficiencyStatesContext,
  proficienciesContext,
  combatStatsContext,
  diceRollerVisibilityContext,
  // userModsContext,
} from "../Context";
import ProfSVG from "./SVGs/ProfSVG";
import ExpertiseSVG from "./SVGs/ExpertiseSVG";
import JoatSVG from "./SVGs/JoatSVG";
import ProficiencyBox from "./ProficiencyBox";
import DiceRoller from "./DiceRoller";

function Stat({ stat, subStats, statColor }) {
  
  const { abilityScores, setAbilityScores } = useContext(abilityScoresContext);
  const { proficiencies, setProficiencies } = useContext(proficienciesContext);
  const { combatStats, setCombatStats } = useContext(combatStatsContext);
  const { setDiceRollerFalse, setDiceRollerTrue } = useContext(
    diceRollerVisibilityContext
  );
  // const { userMods, setUserMods } = useContext(userModsContext);

  const scoreModifier = Math.floor((abilityScores[stat] - 10) / 2);

  return (
    // Root Container
    <div
      className={`grid grid-cols-10 col-span-2 bg-${statColor}-500 rounded-lg shadow-xl min-h-[50px]`}
    >
      {/*  */}
      {/* Strength Score container */}
      <div
        className={`grid col-span-2 bg-${statColor}-600 rounded-lg shadow-xl min-h-[50px] m-1 max-h-[5rem]`}
      >
        <button
          onClick={setDiceRollerTrue}
          className="border-2 rounded-lg rounded-b-none"
        >
          <div id="" className="text-center text-xs max-h-3 my-1">
            {stat}
          </div>
          <div className="text-center text-2xl">
            {scoreModifier === 0 ? "" : scoreModifier > 0 ? "+" : ""}
            {Math.floor((abilityScores[stat] - 10) / 2)}
          </div>
        </button>
        <input
          className="flex w-full text-center rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          value={abilityScores[stat]}
          onChange={(e) => {
            setAbilityScores({
              ...abilityScores,
              [stat]: e.target.value,
            });
          }}
        />
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/* Stat skills / save container */}
      <div
        className={`grid grid-rows-2 col-span-8 bg-${statColor}-500 rounded-lg min-h-[50px] m-1`}
      >
        {/* Saving Throw */}
        {subStats.map((stat) => (
          <div
            className={`grid grid-rows-subgrid grid-cols-10 grid-flow-col row-span-1 col-span-8 bg-${statColor}-700 rounded-lg shadow-xl min-h-[50px] m-1 border-dotted border-b-2 border-red-950`}
            key={stat}
          >
            <ProficiencyBox parentProf={`${stat}`}></ProficiencyBox>

            <div className="grid col-span-7 mx-2 my-auto">{stat}</div>

            <div
              className={`grid col-span-3 text-center bg-${statColor}-800 rounded-r-lg`}
            >
              <input
                className="flex w-full rounded-rLg text-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-lg"
                // type="number"
                onChange={(e) => {
                  setAbilityScores({
                    ...abilityScores,
                    [stat]: e.target.value,
                  });
                }}
                value={(() => {
                  const skillTotal =
                    proficiencies[stat] === "proficiency"
                      ? combatStats.profBonus + scoreModifier
                      : proficiencies[stat] === "expertise"
                      ? combatStats.profBonus * 2 + scoreModifier
                      : proficiencies[stat] === "jackOfAllTrades"
                      ? Math.floor(combatStats.profBonus / 2) + scoreModifier
                      : scoreModifier;

                  return skillTotal > 0 ? `+${skillTotal}` : skillTotal;
                })()}
              ></input>

              {/*  value={
                     combatStats.profBonus === 0
                     ? ""
                     : combatStats.profBonus > 0
                     ? `+${combatStats.profBonus}`
                     : combatStats.profBonus
                 } */}
            </div>
          </div>
        ))}

        {/* Athletics */}
        {/* <div
          className={`grid grid-rows-subgrid grid-cols-10 grid-flow-col row-span-1 col-span-8 bg-${statColor}-700 rounded-lg shadow-xl min-h-[50px] m-1`}
        >
          <ProficiencyBox parentProf="athletics"></ProficiencyBox>

          <div className="grid col-span-7 mx-2 my-auto">Athletics</div>
          <div
            className={`grid col-span-3 text-center bg-${statColor}-800 rounded-r-lg`}
          >
            <input
              className="flex w-full rounded-r-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
            ></input>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default Stat;
