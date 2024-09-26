import { useState, useContext } from "react";
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
  diceRollInstancesContext,
} from "./Context";

import DiceRoller from "./Components/DiceRoller";
import OpenDiceRollerButton from "./Components/OpenDiceRollerButton";

function App() {
  const [abilityScores, setAbilityScores] = useState({
    Strength: 10,
    Dexterity: 10,
    Constitution: 10,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 10,
  });

  const [combatStats, setCombatStats] = useState({
    initiative: 0,
    AC: 10,
    currentHP: 0,
    maxHP: 0,
    profBonus: 2,
    speeds: { walk: 30, fly: 0, swim: 0, climb: 0, burrow: 0, misc: 0 },
    maxHitDie: { d6: 0, d8: 0, d10: 0, d12: 0 },
    currentHitDie: { d6: 0, d8: 0, d10: 0, d12: 0 },
  });

  const [backgroundStats, setBackgroundStats] = useState({
    characterName: "Placeholder McGee",
    race: "Code Monkey",
    alignment: "Lawful Good",
    background: "Procrastinator",
    experiencePoints: 28,
    classLevels: [{ Barbarian: 5 }, { Fighter: 1 }],
    subclassLevels: {},
  });

  //
  // Allow the user to add their own custom defined classes instead of constraining to a set list of classes.
  // This will be done with the use of a "+" button popup once the user has clicked/selected the "Class Levels" field.
  // On click, the "+" button will give the user a field to type in what class and how many levels they wish to add.
  // There will also be a "-" button that similarly appears when the "Class Levels" field is selected, which will give the user a selection of
  // their class levels which they can increment or decrement.

  // const [levels, setLevels] = useState({
  //   classLevels: {},
  //   subclassLevels: {},
  // });

  //
  // States in which each proficiency can exist in
  const proficiencyStates = {
    0: "none",
    1: "proficiency",
    2: "expertise",
    3: "jackOfAllTrades",
  };

  //
  // Save & Skill proficiencies
  const [proficiencies, setProficiencies] = useState({
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

  //
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
    initiative: 5,
    spellSaveDC: 0,
    spellAtt: 0,
  });

  //
  // Dice roller visibility
  const [diceRollerVisible, setDiceRollerVisible] = useState(false);
  const setDiceRollerFalse = () => {
    setDiceRollerVisible(false);
  };
  const setDiceRollerTrue = () => {
    setDiceRollerVisible(true);
  };

  //
  // Dice roller instances
  let [diceRollInstances, setDiceRollInstances] = useState([]);

  //
  // Saving
  const save = () => {
    console.log("Save!");
    const data = {
      abilityScores,
      combatStats,
      backgroundStats,
      proficiencies,
      userMods,
    };
    const jsonData = JSON.stringify(data, null, 2); // Pretty-print JSON with indentation
    const blob = new Blob([jsonData], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "characterData.json"; // Filename for the download
    a.click();

    URL.revokeObjectURL(url);
  };

  //
  // Loading
  const load = (event) => {
    console.log("Load!");
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);

          // Update the state with the loaded data
          setAbilityScores(data.abilityScores || {});
          setCombatStats(data.combatStats || {});
          setBackgroundStats(data.backgroundStats || {});
          setProficiencies(data.proficiencies || {});
          setUserMods(data.userMods || {});
        } catch (error) {
          console.error("Error parsing JSON:", error);
          alert(
            "Failed to load the file. Please ensure it's a valid JSON file."
          );
        }
      };
      reader.readAsText(file);
    }
  };

  //
  // Rendered
  return (
    <diceRollInstancesContext.Provider
      value={{ diceRollInstances, setDiceRollInstances }}
    >
      <proficiencyStatesContext.Provider value={{ proficiencyStates }}>
        <combatStatsContext.Provider value={{ combatStats, setCombatStats }}>
          {/* <userModsContext.Provider value={{ userMods, setUserMods }}> */}
          <backgroundStatsContext.Provider
            value={{ backgroundStats, setBackgroundStats }}
          >
            <combatStatsContext.Provider
              value={{ combatStats, setCombatStats }}
            >
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
                      <Overview save={save} load={load}></Overview>
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
            </combatStatsContext.Provider>
          </backgroundStatsContext.Provider>
          {/* </userModsContext.Provider> */}
        </combatStatsContext.Provider>
      </proficiencyStatesContext.Provider>
    </diceRollInstancesContext.Provider>
  );
}

export default App;
