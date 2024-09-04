import { useState } from "react";
import Overview from "./Pages/Overview";
import {
  abilityScoresContext,
  combatStatsContext,
  backgroundStatsContext,
  levelsContext,
  proficiencyStatesContext,
  proficienciesContext,
  userModsContext,
  diceRollerVisibilityContext,
} from "./Context";

import ProfSVG from "./Components/SVGs/ProfSVG";
import ExpertiseSVG from "./Components/SVGs/ExpertiseSVG";
import JoatSVG from "./Components/SVGs/JoatSVG";
import Strength from "./Components/Stat";
import ProficiencyBox from "./Components/ProficiencyBox";
import DiceRoller from "./Components/DiceRoller";
import OpenDiceRollerButton from "./Components/OpenDiceRollerButton";

function App() {
  const [abilityScores, setAbilityScores] = useState({
    Strength: 7,
    Dexterity: 9,
    Constitution: 12,
    Intelligence: 15,
    Wisdom: 20,
    Charisma: 23,
  });

  const [combatStats, setCombatStats] = useState({
    AC: 10,
    HP: 10,
    profBonus: 3,
    speeds: { walking: 30, flying: 0, swimming: 0, burrowing: 0, misc: 0 },
    maxHitDie: { d6: 0, d8: 0, d10: 0, d12: 0 },
    currentHitDie: { d6: 0, d8: 0, d10: 0, d12: 0 },
  });

  const [backgroundStats, setBackgroundStats] = useState({
    characterName: "Placeholder McGee",
    race: "codeMonkey",
    alignment: "Chaotic Good",
    background: "Procrastinator",
    experiencePoints: {
      current: 999,
      max: 355000,
    },
  });

  // Allow the user to add their own custom defined classes instead of constraining to a set list of classes.
  // This will be done with the use of a "+" button popup once the user has clicked/selected the "Class Levels" field.
  // On click, the "+" button will give the user a field to type in what class and how many levels they wish to add.
  // There will also be a "-" button that similarly appears when the "Class Levels" field is selected, which will give the user a selection of
  // their class levels which they can increment or decrement.
  const [levels, setLevels] = useState({
    classLevels: {},
    subclassLevels: {},
  });

  const proficiencyStates = {
    0: "none",
    1: "proficiency",
    2: "expertise",
    3: "jackOfAllTrades",
  };

  // Save & Skill proficiencies
  const [proficiencies, setProficiencies] = useState({
    "Strength Save": proficiencyStates[1],
    "Dexterity Save": proficiencyStates[1],
    "Constitution Save": proficiencyStates[1],
    "Intelligence Save": proficiencyStates[1],
    "Wisdom Save": proficiencyStates[1],
    "Charisma Save": proficiencyStates[1],

    Athletics: proficiencyStates[2],
    Acrobatics: proficiencyStates[2],
    "Sleight Of Hand": proficiencyStates[2],
    Stealth: proficiencyStates[2],
    Arcana: proficiencyStates[2],
    History: proficiencyStates[2],
    Investigation: proficiencyStates[2],
    Nature: proficiencyStates[2],
    Religion: proficiencyStates[2],
    "Animal Handling": proficiencyStates[2],
    Insight: proficiencyStates[2],
    Medicine: proficiencyStates[2],
    Perception: proficiencyStates[2],
    Survival: proficiencyStates[2],
    Deception: proficiencyStates[2],
    Intimidation: proficiencyStates[2],
    Performance: proficiencyStates[2],
    Persuasion: proficiencyStates[2],
  });

  // User Modifiers
  const [userMods, setUserMods] = useState({
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

  // const proficiencyImages = {
  //   proficiency: <ProfSVG></ProfSVG>,
  //   expertise: <ExpertiseSVG></ExpertiseSVG>,
  //   jackOfAllTrades: <JoatSVG></JoatSVG>,
  // };

  const [diceRollerVisible, setDiceRollerVisible] = useState(false);

  const setDiceRollerFalse = () => {
    setDiceRollerVisible(false);
  };
  const setDiceRollerTrue = () => {
    setDiceRollerVisible(true);
  };

  return (
    <proficiencyStatesContext.Provider value={{ proficiencyStates }}>
      <combatStatsContext.Provider value={{ combatStats, setCombatStats }}>
        {/* <userModsContext.Provider value={{ userMods, setUserMods }}> */}
        <proficienciesContext.Provider
          value={{ proficiencies, setProficiencies }}
        >
          <abilityScoresContext.Provider
            value={{ abilityScores, setAbilityScores }}
          >
            <diceRollerVisibilityContext.Provider
              value={{
                diceRollerVisible,
                setDiceRollerFalse,
                setDiceRollerTrue,
              }}
            >
              <div className="min-h-full w-full">
                <Overview></Overview>
                {diceRollerVisible ? (
                  <DiceRoller />
                ) : (
                  <OpenDiceRollerButton></OpenDiceRollerButton>
                )}
                <div className="py-6"></div>
              </div>
            </diceRollerVisibilityContext.Provider>
          </abilityScoresContext.Provider>
        </proficienciesContext.Provider>
        {/* </userModsContext.Provider> */}
      </combatStatsContext.Provider>
    </proficiencyStatesContext.Provider>
  );
}

export default App;
