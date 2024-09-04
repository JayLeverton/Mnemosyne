import { useContext } from "react";
import {
  proficiencyStatesContext,
  proficienciesContext,
  //   proficiencyImagesContext,
} from "../Context";
import ProfSVG from "./SVGs/ProfSVG";
import ExpertiseSVG from "./SVGs/ExpertiseSVG";
import JoatSVG from "./SVGs/JoatSVG";

const ProficiencyBox = ({ parentProf }) => {
  const { proficiencyStates } = useContext(proficiencyStatesContext);
  //        For Reference:
  //     0: "none",
  //     1: "proficiency",
  //     2: "expertise",
  //     3: "jackOfAllTrades"
  const { proficiencies, setProficiencies } = useContext(proficienciesContext);
  //        For Reference:
  //     strSave: proficiencyStates[0],
  //     dexSave: proficiencyStates[0],
  //     conSave: proficiencyStates[0],
  //     intSave: proficiencyStates[0],
  //     wisSave: proficiencyStates[0],
  //     chaSave: proficiencyStates[0],

  //     athletics: proficiencyStates[0],
  //     acrobatics: proficiencyStates[0],
  //     sleightOfHand: proficiencyStates[0],
  //     stealth: proficiencyStates[0],
  //     arcana: proficiencyStates[0],
  //     history: proficiencyStates[0],
  //     investigation: proficiencyStates[0],
  //     nature: proficiencyStates[0],
  //     religion: proficiencyStates[0],
  //     animalHandling: proficiencyStates[0],
  //     insight: proficiencyStates[0],
  //     medicine: proficiencyStates[0],
  //     perception: proficiencyStates[0],
  //     survival: proficiencyStates[0],
  //     deception: proficiencyStates[0],
  //     intimidation: proficiencyStates[0],
  //     performance: proficiencyStates[0],
  //     persuasion: proficiencyStates[0],

  //   const { proficiencyImages } = useContext(proficiencyImagesContext);

  const handleClick = (e) => {
    // Prevents the default action of the event (optional)
    e.preventDefault();

    console.log(parentProf + " : " + proficiencies[parentProf]);
    // const nextProfState = proficiencyStates[nextIndex]

    // const nextProficiency = proficiencyStates[nextIndex];
    if (proficiencies[parentProf] === "proficiency") {
      console.log("toggling to expertise");
      setProficiencies({
        ...proficiencies,
        [parentProf]: "expertise",
      });
    } else if (proficiencies[parentProf] === "expertise") {
      console.log("toggling to jackOfAllTrades");
      setProficiencies({
        ...proficiencies,
        [parentProf]: "jackOfAllTrades",
      });
    } else if (proficiencies[parentProf] === "jackOfAllTrades") {
      console.log("toggling to none");
      setProficiencies({
        ...proficiencies,
        [parentProf]: "none",
      });
    } else {
      console.log("toggling to proficiency");
      setProficiencies({
        ...proficiencies,
        [parentProf]: "proficiency",
      });
    }
  };

  return (
    <button
      className="w-[1.75rem] h-[1.75rem] border-2 rounded-md m-1 bg-gray-600 hover:bg-gray-700"
      onClick={handleClick}
    >
      {proficiencies[parentProf] === "proficiency" ? (
        <ProfSVG />
      ) : proficiencies[parentProf] === "expertise" ? (
        <ExpertiseSVG />
      ) : proficiencies[parentProf] === "jackOfAllTrades" ? (
        <JoatSVG />
      ) : null}
    </button>
  );
};

export default ProficiencyBox;
