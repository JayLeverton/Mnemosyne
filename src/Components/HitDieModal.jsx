import React, { useContext, useState } from "react";
import { combatStatsContext } from "../Context";
import HitDieChanger from "./HitDieChanger";

function HitDieModal({ showHitDieModal, setShowHitDieModal }) {
  const { combatStats, setCombatStats } = useContext(combatStatsContext);

  return (
    <div>
      {showHitDieModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto">
              {/*content*/}
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800">
                {/*header*/}
                <div className="flex items-start justify-between p-3">
                  <h3 className="text-3xl font-semibold">Hit Dice</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowHitDieModal(false)}
                  >
                    <span className="text-black h-6 w-6 text-2xl block">×</span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex items-center flex-col w-full relative p-3 flex-auto">
                  <div className="grid text-lg flex-col w-full h-full text-center gap-3">
                    {/*  */}
                    {/* hit die */}
                    <div className="grid">
                      <div className="">d6:</div>
                      <div className="grid grid-flow-col">
                        <div className="ml-auto rounded border-[1px] bg-slate-950 h-8 w-8">
                          <HitDieChanger
                            operation={"decrement"}
                            hitDie={"d6"}
                          ></HitDieChanger>
                        </div>
                        <div className="text-center">
                          {combatStats.maxHitDie.d6}
                        </div>
                        <div className="mr-auto rounded border-[1px] bg-slate-950 h-8 w-8">
                          <HitDieChanger
                            operation={"increment"}
                            hitDie={"d6"}
                          ></HitDieChanger>
                        </div>
                      </div>
                    </div>

                    {/*  */}
                    {/* hit die */}
                    <div className="grid">
                      <div className="">d8:</div>
                      <div className="grid grid-flow-col">
                        <div className="ml-auto rounded border-[1px] bg-slate-950 h-8 w-8">
                          <HitDieChanger
                            operation={"decrement"}
                            hitDie={"d8"}
                          ></HitDieChanger>
                        </div>
                        <div className="text-center">
                          {combatStats.maxHitDie.d8}
                        </div>
                        <div className="mr-auto rounded border-[1px] bg-slate-950 h-8 w-8">
                          <HitDieChanger
                            operation={"increment"}
                            hitDie={"d8"}
                          ></HitDieChanger>
                        </div>
                      </div>
                    </div>

                    {/*  */}
                    {/* hit die */}
                    <div className="grid">
                      <div className="">d10:</div>
                      <div className="grid grid-flow-col">
                        <div className="ml-auto rounded border-[1px] bg-slate-950 h-8 w-8">
                          <HitDieChanger
                            operation={"decrement"}
                            hitDie={"d10"}
                          ></HitDieChanger>
                        </div>
                        <div className="text-center">
                          {combatStats.maxHitDie.d10}
                        </div>
                        <div className="mr-auto rounded border-[1px] bg-slate-950 h-8 w-8">
                          <HitDieChanger
                            operation={"increment"}
                            hitDie={"d10"}
                          ></HitDieChanger>
                        </div>
                      </div>
                    </div>

                    {/*  */}
                    {/* hit die */}
                    <div className="grid">
                      <div className="">d12:</div>
                      <div className="grid grid-flow-col">
                        <div className="ml-auto rounded border-[1px] bg-slate-950 h-8 w-8">
                          <HitDieChanger
                            operation={"decrement"}
                            hitDie={"d12"}
                          ></HitDieChanger>
                        </div>
                        <div className="text-center">
                          {combatStats.maxHitDie.d12}
                        </div>
                        <div className="mr-auto rounded border-[1px] bg-slate-950 h-8 w-8">
                          <HitDieChanger
                            operation={"increment"}
                            hitDie={"d12"}
                          ></HitDieChanger>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowHitDieModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowHitDieModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default HitDieModal;
