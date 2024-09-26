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

  const handleClick = (e) => {

    e.preventDefault();

    console.log(parentProf + " : " + proficiencies[parentProf]);

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
