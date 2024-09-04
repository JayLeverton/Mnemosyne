import { useContext } from "react";
import { backgroundStatsContext } from "../Context";

function OverviewBackground() {
  const { backgroundStats, setBackgroundStats } = useContext(
    backgroundStatsContext
  );

  return (
    <div className="grid grid-cols-2 col-span-2">
      {/* OverviewBackground. Includes character name, class & level, OverviewBackground, player name, race, alignment, and experience points. */}
      <div
        id="OverviewBackground"
        className="grid grid-cols-subgrid grid-rows-2 bg-black rounded-lg shadow-xl min-h-[50px] row-span-2 col-span-2"
      >
        <div
          id="characterName"
          className="grid bg-gray-500 rounded-lg shadow-xl min-h-[50px] m-1 text-center"
        >
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            Character Name
          </div>

          <input
            className="flex w-full text-center bg-gray-500 border-[1px] rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={backgroundStats.characterName}
            onChange={(e) => {
              setBackgroundStats({
                ...backgroundStats,
                characterName: e.target.value,
              });
            }}
          />
        </div>

        <div
          id="race"
          className="grid bg-gray-500 rounded-lg shadow-xl min-h-[50px] m-1 "
        >
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            Race
          </div>

          <input
            className="flex w-full text-center bg-gray-500 border-[1px] rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={backgroundStats.race}
            onChange={(e) => {
              setBackgroundStats({
                ...backgroundStats,
                race: e.target.value,
              });
            }}
          />
        </div>

        <div
          id="classAndLevel"
          className="grid bg-gray-500 rounded-lg shadow-xl min-h-[50px] m-1"
        >
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            Class Levels
          </div>

          {/*  */}
          {/* I must create a modal dialog box to handle the inputting and subtraction of classes!
              This modal must appear when the user taps the "Class Levels" field. */}
          <input
            className="flex w-full text-center bg-gray-500 border-[1px] rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={backgroundStats.classLevels}
            onChange={(e) => {
              setBackgroundStats({
                ...backgroundStats,
                classLevels: e.target.value,
              });
            }}
          />
        </div>

        <div
          id="alignment"
          className="grid bg-gray-500 rounded-lg shadow-xl min-h-[50px] m-1 "
        >
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            Alignment
          </div>

          <input
            className="flex w-full text-center bg-gray-500 border-[1px] rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={backgroundStats.alignment}
            onChange={(e) => {
              setBackgroundStats({
                ...backgroundStats,
                alignment: e.target.value,
              });
            }}
          />
        </div>

        <div
          id="background"
          className="grid bg-gray-500 rounded-lg shadow-xl min-h-[50px] m-1 text-center"
        >
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            Background
          </div>

          <input
            className="flex w-full text-center bg-gray-500 border-[1px] rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={backgroundStats.background}
            onChange={(e) => {
              setBackgroundStats({
                ...backgroundStats,
                background: e.target.value,
              });
            }}
          />
        </div>

        <div
          id="experience"
          className="grid bg-gray-500 rounded-lg shadow-xl min-h-[50px] m-1 "
        >
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            Experience Points
          </div>

          <input
            className="flex w-full text-center bg-gray-500 border-[1px] rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={backgroundStats.experiencePoints}
            onChange={(e) => {
              setBackgroundStats({
                ...backgroundStats,
                experiencePoints: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default OverviewBackground;
