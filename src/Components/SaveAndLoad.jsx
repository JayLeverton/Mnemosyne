import React, { useContext } from "react";
import {
  abilityScoresContext,
  proficiencyStatesContext,
  proficienciesContext,
  combatStatsContext,
  backgroundStatsContext,
  userModsContext,
} from "../Context";

function SaveAndLoad({ save, load }) {
  const { setAbilityScores } = useContext(abilityScoresContext);
  const { proficiencyStates } = useContext(proficiencyStatesContext);
  const { setProficiencies } = useContext(proficienciesContext);
  const { setCombatStats } = useContext(combatStatsContext);
  const { setBackgroundStats } = useContext(backgroundStatsContext);
  const { setUserMods } = useContext(userModsContext);

  const fileInputRef = React.useRef(null);

  const handleLoadClick = () => {
    fileInputRef.current.click();
  };

  const handleResetClick = () => {
    reset();
  };

  const reset = () => {
    localStorage.clear();
    setAbilityScores({
      Strength: 10,
      Dexterity: 10,
      Constitution: 10,
      Intelligence: 10,
      Wisdom: 10,
      Charisma: 10,
    });
    setCombatStats({
      initiative: 0,
      AC: 10,
      currentHP: 0,
      maxHP: 0,
      profBonus: 2,
      speeds: { walk: 30, fly: 0, swim: 0, climb: 0, burrow: 0, misc: 0 },
      maxHitDie: { d6: 0, d8: 0, d10: 0, d12: 0 },
      currentHitDie: { d6: 0, d8: 0, d10: 0, d12: 0 },
    });
    setBackgroundStats({
      characterName: "Placeholder McGee",
      race: "Code Monkey",
      alignment: "Lawful Good",
      background: "Procrastinator",
      experiencePoints: 28,
      classLevels: [{ Barbarian: 5 }, { Fighter: 1 }],
      subclassLevels: {},
    });
    setProficiencies({
      "Strength Save": proficiencyStates[0],
      "Dexterity Save": proficiencyStates[0],
      "Constitution Save": proficiencyStates[0],
      "Intelligence Save": proficiencyStates[0],
      "Wisdom Save": proficiencyStates[0],
      "Charisma Save": proficiencyStates[0],

      Athletics: proficiencyStates[0],
      Acrobatics: proficiencyStates[0],
      "Sleight Of Hand": proficiencyStates[0],
      Stealth: proficiencyStates[0],
      Arcana: proficiencyStates[0],
      History: proficiencyStates[0],
      Investigation: proficiencyStates[0],
      Nature: proficiencyStates[0],
      Religion: proficiencyStates[0],
      "Animal Handling": proficiencyStates[0],
      Insight: proficiencyStates[0],
      Medicine: proficiencyStates[0],
      Perception: proficiencyStates[0],
      Survival: proficiencyStates[0],
      Deception: proficiencyStates[0],
      Intimidation: proficiencyStates[0],
      Performance: proficiencyStates[0],
      Persuasion: proficiencyStates[0],
    });
    setUserMods({
      Strength: 0,
      Dexterity: 0,
      Constitution: 0,
      Intelligence: 0,
      Wisdom: 0,
      Charisma: 0,
      AC: 0,
      HP: 0,
      profBonus: 0,
      speeds: {
        walking: 0,
        flying: 0,
        swimming: 0,
        burrowing: 0,
        misc: 0,
      },
      maxHitDie: {
        d6: 0,
        d8: 0,
        d10: 0,
        d12: 0,
      },
      initiative: 0,
      spellSaveDC: 0,
      spellAtt: 0,
    });
  };

  return (
    <div className="flex place-self-center col-span-2 w-full justify-evenly bg-gray-800 mt-[-0.25rem]">
      <button className="bg-slate-600 rounded-lg text-lg p-2" onClick={save}>
        Save
      </button>

      <input
        id="fileInput"
        className=""
        type="file"
        accept=".json"
        onChange={load}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <button
        className="bg-slate-600 rounded-lg text-lg p-2"
        onClick={handleLoadClick}
      >
        Load
      </button>
      <button
        className="flex self-end bg-slate-600 rounded-lg text-lg p-2"
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
}

export default SaveAndLoad;
