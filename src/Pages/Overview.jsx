import { useContext } from "react";
import Combat from "../Components/Combat";
import DiceRoller from "../Components/DiceRoller";
import OverviewBackground from "../Components/OverviewBackground";
import SaveAndLoad from "../Components/SaveAndLoad";
import Stat from "../Components/Stat";

function Overview({ save, load }) {
  let statColours = {
    str: "red",
    dex: "blue",
    con: "orange",
    int: "purple",
    wis: "green",
    cha: "indigo",
  };

  return (
    // Container to encompass the overview
    <div className=" bg-gray-900 w-full grid grid-cols-2 gap-2 p-2 ">
      <SaveAndLoad save={save} load={load}></SaveAndLoad>
      <OverviewBackground></OverviewBackground>

      {/* Combat stuff */}

      <Combat></Combat>

      {/* Ability scores, skills, and saves */}

      <Stat
        stat={"Strength"}
        subStats={["Strength Save", "Athletics"]}
        statColor={statColours.str}
      ></Stat>

      <Stat
        stat={"Dexterity"}
        subStats={[
          "Dexterity Save",
          "Acrobatics",
          "Sleight Of Hand",
          "Stealth",
        ]}
        statColor={statColours.dex}
      ></Stat>

      <Stat
        stat={"Constitution"}
        subStats={["Constitution Save"]}
        statColor={statColours.con}
      ></Stat>

      <Stat
        stat={"Intelligence"}
        subStats={[
          "Intelligence Save",
          "Arcana",
          "History",
          "Investigation",
          "Nature",
          "Religion",
        ]}
        statColor={statColours.int}
      ></Stat>

      <Stat
        stat={"Wisdom"}
        subStats={[
          "Wisdom Save",
          "Animal Handling",
          "Insight",
          "Medicine",
          "Perception",
          "Survival",
        ]}
        statColor={statColours.wis}
      ></Stat>

      <Stat
        stat={"Charisma"}
        subStats={[
          "Charisma Save",
          "Deception",
          "Intimidation",
          "Performance",
          "Persuasion",
        ]}
        statColor={statColours.cha}
      ></Stat>
    </div>
  );
}

export default Overview;
