import React, { useContext, useState } from "react";
import { combatStatsContext } from "../Context";
import MaxHitDieChanger from "./MaxHitDieChanger";

function HitDieModal({ showHitDieModal, setShowHitDieModal }) {
  const { combatStats, setCombatStats } = useContext(combatStatsContext);

  return (
    <div>
      {showHitDieModal ? (
        <>
          <div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowHitDieModal(false)}
          >
            <div className="border-[1px]" onClick={(e) => e.stopPropagation()}>
              {/*content*/}
              <div className="flex flex-col rounded-lg shadow-lg bg-slate-800">
                {/*header*/}
                <div className="flex flex-col p-5 text-center">
                  <h3 className="text-3xl font-semibold">Total Hit Dice</h3>
                </div>
                {/*body*/}
                <div className="flex flex-col w-full">
                  <div className="grid text-lg flex-col text-center">
                    {/*  */}
                    {/* hit die */}
                    <div className="grid place-items-center mb-4">
                      <div className="font-bold">d6:</div>
                      <p className="w-3/6 text-xs mb-1 text-slate-300">
                        sorcerers, wizards
                      </p>
                      <div className="grid grid-flow-col">
                        <div className="rounded border-[1px] bg-slate-950 h-8 w-8">
                          <MaxHitDieChanger
                            operation={"decrement"}
                            hitDie={"d6"}
                          ></MaxHitDieChanger>
                        </div>
                        <div className="text-center mx-5">
                          {combatStats.maxHitDie.d6}
                        </div>
                        <div className="rounded border-[1px] bg-slate-950 h-8 w-8">
                          <MaxHitDieChanger
                            operation={"increment"}
                            hitDie={"d6"}
                          ></MaxHitDieChanger>
                        </div>
                      </div>
                    </div>

                    {/*  */}
                    {/* hit die */}
                    <div className="grid place-items-center mb-4">
                      <div className="font-bold">d8:</div>
                      <p className="w-3/6 text-xs mb-1 text-slate-300">
                        artificers, bards, clerics, druids, monks, rogues,
                        warlocks
                      </p>

                      <div className="grid grid-flow-col">
                        <div className="rounded border-[1px] bg-slate-950 h-8 w-8">
                          <MaxHitDieChanger
                            operation={"decrement"}
                            hitDie={"d8"}
                          ></MaxHitDieChanger>
                        </div>
                        <div className="text-center mx-5">
                          {combatStats.maxHitDie.d8}
                        </div>
                        <div className="rounded border-[1px] bg-slate-950 h-8 w-8">
                          <MaxHitDieChanger
                            operation={"increment"}
                            hitDie={"d8"}
                          ></MaxHitDieChanger>
                        </div>
                      </div>
                    </div>

                    {/*  */}
                    {/* hit die */}
                    <div className="grid place-items-center mb-4">
                      <div className=" font-bold">d10:</div>
                      <p className="w-3/6 text-xs mb-1 text-slate-300">
                        fighters, paladins, rangers
                      </p>
                      <div className="grid grid-flow-col">
                        <div className="rounded border-[1px] bg-slate-950 h-8 w-8">
                          <MaxHitDieChanger
                            operation={"decrement"}
                            hitDie={"d10"}
                          ></MaxHitDieChanger>
                        </div>
                        <div className="text-center mx-5">
                          {combatStats.maxHitDie.d10}
                        </div>
                        <div className="rounded border-[1px] bg-slate-950 h-8 w-8">
                          <MaxHitDieChanger
                            operation={"increment"}
                            hitDie={"d10"}
                          ></MaxHitDieChanger>
                        </div>
                      </div>
                    </div>

                    {/*  */}
                    {/* hit die */}
                    <div className="grid place-items-center ">
                      <div className="font-bold">d12:</div>
                      <p className="w-3/6 text-xs mb-1 text-slate-300">
                        barbarians
                      </p>
                      <div className="grid grid-flow-col">
                        <div className="rounded border-[1px] bg-slate-950 h-8 w-8">
                          <MaxHitDieChanger
                            operation={"decrement"}
                            hitDie={"d12"}
                          ></MaxHitDieChanger>
                        </div>
                        <div className="text-center mx-5">
                          {combatStats.maxHitDie.d12}
                        </div>
                        <div className="rounded border-[1px] bg-slate-950 h-8 w-8">
                          <MaxHitDieChanger
                            operation={"increment"}
                            hitDie={"d12"}
                          ></MaxHitDieChanger>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex pb-8 pt-10">
                  <button
                    className="text-red-500 mx-auto background-transparent font-bold text-lg ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowHitDieModal(false)}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : null}
    </div>
  );
}

export default HitDieModal;
