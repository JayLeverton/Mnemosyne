function OverviewBackground() {
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
          <div className="text-center">John Smith</div>
        </div>

        <div
          id="race"
          className="grid bg-gray-500 rounded-lg shadow-xl min-h-[50px] m-1 "
        >
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            Race
          </div>

          <div className="text-center">Bugbear</div>
        </div>

        <div
          id="classAndLevel"
          className="grid bg-gray-500 rounded-lg shadow-xl min-h-[50px] m-1"
        >
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            Class Levels
          </div>

          <div className="text-center">Barbarian 5 / Fighter 1</div>
        </div>

        <div
          id="alignment"
          className="grid bg-gray-500 rounded-lg shadow-xl min-h-[50px] m-1 "
        >
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            Alignment
          </div>

          <div className="text-center">Chaotic Good</div>
        </div>

        <div
          id="background"
          className="grid bg-gray-500 rounded-lg shadow-xl min-h-[50px] m-1 text-center"
        >
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            Background
          </div>

          <div className="text-center">Folk Hero</div>
        </div>

        <div
          id="experience"
          className="grid bg-gray-500 rounded-lg shadow-xl min-h-[50px] m-1 "
        >
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            Experience Points
          </div>

          <div className="text-center">12345 / 99999</div>
        </div>
      </div>
    </div>
  );
}

export default OverviewBackground;
