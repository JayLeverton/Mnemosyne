import { useContext } from "react";
import UpSVG from "./SVGs/UpSVG";
import { diceRollerVisibilityContext } from "../Context";

function OpenDiceRollerButton() {
  const { setDiceRollerFalse, setDiceRollerTrue } = useContext(
    diceRollerVisibilityContext
  );

  return (
    <div className="fixed bg-slate-800 w-12 h-12 bottom-0 right-4 opacity-[90%]">
      <button className="w-full h-full" onClick={setDiceRollerTrue}>
        <UpSVG></UpSVG>
      </button>
    </div>
  );
}
export default OpenDiceRollerButton;
