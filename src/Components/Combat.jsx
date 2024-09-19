import { useContext } from "react";
import { combatStatsContext } from "../Context";

function Combat() {
  const { combatStats, setCombatStats } = useContext(combatStatsContext);

  return (
    <div className="grid grid-rows-4 grid-flow-col-dense grid-cols-6 col-span-2 bg-white rounded-lg shadow-xl min-h-[50px]">
      <div className="grid h-auto row-start-1 col-span-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          Initiative
        </div>

        <div className="text-center">+3</div>
      </div>

      <div className="grid row-start-1 row-span-2 h-auto col-span-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          Speed
        </div>

        <div className="text-center">40ft</div>
      </div>

      <div className="grid h-auto row-start-1 col-span-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          AC
        </div>

        <div className="text-center">16</div>
      </div>

      <div className="grid h-auto row-start-2 col-span-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          Hit Die
        </div>

        <div className="text-center">5d12 / 1d10</div>
      </div>

      <div className="grid h-auto row-start-2 col-start-5 col-span-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          Prof. Bonus
        </div>

        <input
          className="text-center w-full h-full rounded-b-lg"
          type="number"
          max="99"
          value={combatStats.profBonus}
          onChange={(e) => {
            const value = e.target.value;
            setCombatStats({
              ...combatStats,
              profBonus: value === `` ? null : parseInt(e.target.value),
            });
          }}
        />
      </div>

      {/* <div className="grid grid-cols-3 grid-rows-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div className="grid col-span-3 grid-flow-col ">
          <button className="grid row-span-2 border-2">-1</button>
          <div id="" className="text-center text-xs max-h-3 my-0.5">
            HP
          </div>
          <button className="grid grid-flow-row row-span-2 border-2">+1</button>
        </div>
        <div className="text-center grid col-span-3 mx-auto align-middle border-2">
          55 / 63
        </div>
      </div> */}

      <div className="grid row-start-3 col-start-2 align-middle row-span-2 col-span-4 grid-cols-3 grid-rows-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div className="grid col-span-3 grid-cols-8">
          <button className="col-span-3 border-[1px] rounded-tl-lg">-1</button>
          <div className="grid col-span-2 grid-rows-2 h-full">
            <div id="" className="col-start-1 text-center h-full text-lg">
              HP
            </div>
            <div className="max-h-8 mx-auto">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <button className="col-span-3 border-[1px] rounded-tr-lg">+1</button>
        </div>
        <div className="grid grid-cols-7 col-span-3 grid-flow-col">
          <input
            className="text-center col-span-3 align-middle rounded-bl-lg"
            type="number"
            value={combatStats.currentHP}
          />

          <div className="flex items-center text-center mx-auto">/</div>

          <input
            className="text-center row col-span-3 align-middle rounded-br-lg"
            type="number"
            value={combatStats.maxHP}
          />
        </div>
      </div>

      {/* <div className="grid row-start-3 align-middle col-start-2 row-span-2 col-span-4 grid-cols-3 grid-rows-2 bg-red-700 rounded-lg shadow-xl min-h-[50px] m-1">
        <div className="grid row-start-1 col-span-3 grid-cols-8">
          <button className="col-span-3 border-[1px] rounded-tl-lg">-1</button>
          <div className="grid col-span-2 grid-rows-2 h-full">
            <div id="" className="col-start-1 text-center h-full text-lg">
              HP
            </div>
            <div className="max-h-8 mx-auto">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <button className="col-span-3 border-[1px] rounded-tr-lg">+1</button>
        </div>
        <div className="grid row-start-2 grid-cols-7 row-span-1 col-span-3 grid-flow-col">
          <input
            className="text-center col-span-3 align-middle rounded-bl-lg"
            type="number"
            value={combatStats.currentHP}
          />

          <div className="flex items-center text-center mx-auto">/</div>

          <input
            className="text-center row col-span-3 align-middle rounded-br-lg"
            type="number"
            value={combatStats.maxHP}
          />
        </div>
      </div> */}
    </div>
  );
}
export default Combat;
