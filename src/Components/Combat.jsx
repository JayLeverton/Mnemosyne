import { useContext, useEffect, useState } from "react";
import { combatStatsContext } from "../Context";
import HitDie from "./HitDie";
import { createPortal } from "react-dom";
import HitDieModal from "./HitDieModal";

function Combat() {
  const { combatStats, setCombatStats } = useContext(combatStatsContext);
  const [showHitDieModal, setShowHitDieModal] = useState(false);

  useEffect(() => {
    // Expose combatStats to the global window object
    window.combatStats = combatStats;
  }, [combatStats]);

  const incrementHP = () => {
    setCombatStats((prevCombatStats) => ({
      ...prevCombatStats,
      currentHP: prevCombatStats.currentHP + 1,
    }));
  };
  const decrementHP = () => {
    setCombatStats((prevCombatStats) => ({
      ...prevCombatStats,
      currentHP: prevCombatStats.currentHP - 1,
    }));
  };

  const clearFocus = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.activeElement.blur();
    }
  };

  const selectContent = (e) => {
    if (document.activeElement) {
      e.target.select();
    }
  };

  return (
    <div className="grid h-auto grid-flow-col-dense grid-cols-6 col-span-2 rounded-lg shadow-xl">
      {/*  */}
      {/* Initiative */}
      <div className="grid h-auto row-start-1 col-span-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div className="text-center text-xs max-h-3 my-0.5">Initiative</div>

        <form>
          <input
            className="text-center w-full h-full rounded-b-lg"
            type="number"
            max="999"
            value={combatStats.initiative}
            onChange={(e) => {
              const value = e.target.value;
              setCombatStats({
                ...combatStats,
                initiative: value === "" ? null : parseInt(e.target.value),
              });
            }}
            onFocus={selectContent}
            onKeyDown={clearFocus}
          />
        </form>
      </div>

      {/*  */}
      {/* Speeds */}
      <div className="grid row-start-1 row-span-2 h-auto col-span-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div className="text-center text-xs max-h-3 my-0.5 mb-[0.55rem]">
          Speeds
        </div>
        <div className="flex text-xs justify-between">
          <div className="text-left pl-1">Walk: </div>{" "}
          <form>
            <input
              className="text-center w-full h-full max-w-10"
              type="number"
              max="999"
              value={combatStats.speeds.walk}
              onChange={(e) => {
                const value = e.target.value;
                setCombatStats({
                  ...combatStats,
                  speeds: {
                    ...combatStats.speeds,
                    walk: value === "" ? null : parseInt(e.target.value),
                  },
                });
              }}
              onFocus={selectContent}
              onKeyDown={clearFocus}
            />
          </form>
        </div>
        <div className="flex text-xs justify-between">
          <div className="text-left pl-1">Fly: </div>{" "}
          <form>
            <input
              className="text-center w-full h-full max-w-10"
              type="number"
              max="999"
              value={combatStats.speeds.fly}
              onChange={(e) => {
                const value = e.target.value;
                setCombatStats({
                  ...combatStats,
                  speeds: {
                    ...combatStats.speeds,
                    fly: value === "" ? null : parseInt(e.target.value),
                  },
                });
              }}
              onFocus={selectContent}
              onKeyDown={clearFocus}
            />
          </form>
        </div>
        <div className="flex text-xs justify-between">
          <div className="text-left pl-1">Swim: </div>{" "}
          <form>
            <input
              className="text-center w-full h-full max-w-10"
              type="number"
              max="999"
              value={combatStats.speeds.swim}
              onChange={(e) => {
                const value = e.target.value;
                setCombatStats({
                  ...combatStats,
                  speeds: {
                    ...combatStats.speeds,
                    swim: value === "" ? null : parseInt(e.target.value),
                  },
                });
              }}
              onFocus={selectContent}
              onKeyDown={clearFocus}
            />
          </form>
        </div>
        <div className="flex text-xs justify-between">
          <div className="text-left pl-1">Climb: </div>{" "}
          <form>
            <input
              className="text-center w-full h-full max-w-10"
              type="number"
              max="999"
              value={combatStats.speeds.climb}
              onChange={(e) => {
                const value = e.target.value;
                setCombatStats({
                  ...combatStats,
                  speeds: {
                    ...combatStats.speeds,
                    climb: value === "" ? null : parseInt(e.target.value),
                  },
                });
              }}
              onFocus={selectContent}
              onKeyDown={clearFocus}
            />
          </form>
        </div>
        <div className="flex text-xs justify-between">
          <div className="text-left pl-1">Burrow: </div>{" "}
          <form>
            <input
              className="text-center w-full h-full max-w-10"
              type="number"
              max="999"
              value={combatStats.speeds.burrow}
              onChange={(e) => {
                const value = e.target.value;
                setCombatStats({
                  ...combatStats,
                  speeds: {
                    ...combatStats.speeds,
                    burrow: value === "" ? null : parseInt(e.target.value),
                  },
                });
              }}
              onFocus={selectContent}
              onKeyDown={clearFocus}
            />
          </form>
        </div>
        <div className="flex text-xs justify-between">
          <div className="text-left pl-1">Misc: </div>{" "}
          <form>
            <input
              className="text-center w-full h-full max-w-10 rounded-br-lg"
              type="number"
              max="999"
              value={combatStats.speeds.misc}
              onChange={(e) => {
                const value = e.target.value;
                setCombatStats({
                  ...combatStats,
                  speeds: {
                    ...combatStats.speeds,
                    misc: value === "" ? null : parseInt(e.target.value),
                  },
                });
              }}
              onFocus={selectContent}
              onKeyDown={clearFocus}
            />
          </form>
        </div>
      </div>

      {/*  */}
      {/* AC */}
      <div className="grid h-auto row-start-1 col-span-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          AC
        </div>

        <form>
          <input
            className="text-center w-full h-full rounded-b-lg"
            type="number"
            max="99"
            value={combatStats.AC}
            onChange={(e) => {
              const value = e.target.value;
              setCombatStats({
                ...combatStats,
                AC: value === `` ? null : parseInt(e.target.value),
              });
            }}
            onFocus={selectContent}
            onKeyDown={clearFocus}
          />
        </form>
      </div>

      {/*  */}
      {/* Hit Die */}
      <div className="grid h-auto row-start-2 col-span-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div className="flex w-full mt-1">
          
          <button
            className="rounded justify-center text-center text-sm mx-auto p-1 border-[1px] bg-slate-950"
            onClick={() => setShowHitDieModal(true)}
          >Hit Die</button>
          {createPortal(
            <HitDieModal
              showHitDieModal={showHitDieModal}
              setShowHitDieModal={setShowHitDieModal}
            ></HitDieModal>,
            document.body
          )}
        </div>
        <div className="grid h-full">
          <HitDie
            showHitDieModal={showHitDieModal}
            setShowHitDieModal={setShowHitDieModal}
          ></HitDie>
        </div>
      </div>

      {/*  */}
      {/* Proficiency Bonus */}
      <div className="grid h-auto row-start-2 col-start-5 col-span-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          Prof. Bonus
        </div>

        <form>
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
            onFocus={selectContent}
            onKeyDown={clearFocus}
          />
        </form>
      </div>

      {/*  */}
      {/* HP */}
      <div className="grid max-w-96 place-self-center h-auto border-white border-[1px] row-start-3 col-start-2 align-middle row-span-2 col-span-4 grid-cols-3 grid-rows-2 bg-red-700 rounded-lg shadow-xl m-1">
        <div className="grid h-auto col-span-3 grid-cols-3 border-b-[1px]">
          <button
            className="col-span-1 border-r-[1px] rounded-tl-lg"
            onClick={decrementHP}
          >
            -1
          </button>
          <div className="grid">
            <div className="row-start-1 place-self-center pb-1 col-start-1 text-center text-lg">
              HP
            </div>
            <div className="grid h-14 place-self-center row-start-1 col-start-1">
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
                    fillRule="evenodd"
                    clipRule="evenodd"
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
          <button
            className="col-span-1 border-l-[1px] rounded-tr-lg"
            onClick={incrementHP}
          >
            +1
          </button>
        </div>
        <div className="flex justify-between grid-cols-2 col-span-3 grid-flow-col">
          <div className="flex flex-col  h-auto grid-rows-2 text-center border-r-[1px] align-middle">
            <div className="h-full my-auto max-h-6 text-sm text-center align-middle">
              Current
            </div>

            <form>
              <input
                className="text-center h-full w-full rounded-bl-lg"
                type="number"
                value={combatStats.currentHP}
                onChange={(e) => {
                  const value = e.target.value;
                  setCombatStats({
                    ...combatStats,
                    currentHP: value === `` ? null : parseInt(e.target.value),
                  });
                }}
                onFocus={selectContent}
                onKeyDown={clearFocus}
              />
            </form>
          </div>

          <div className="flex flex-col h-auto grid-rows-2 text-center border-l-[1px] align-middle">
            <div className="flex flex-col h-full my-auto max-h-6 text-sm text-center align-middle">
              Max
            </div>
            <form>
              <input
                className="text-center h-full w-full rounded-br-lg"
                type="number"
                value={combatStats.maxHP}
                onChange={(e) => {
                  const value = e.target.value;
                  setCombatStats({
                    ...combatStats,
                    maxHP: value === `` ? null : parseInt(e.target.value),
                  });
                }}
                onFocus={selectContent}
                onKeyDown={clearFocus}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Combat;
