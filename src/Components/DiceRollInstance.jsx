function DiceRollInstance({ rollType, result, tempRoll, scoreModifier }) {
  let scoreModifierString =
    scoreModifier < 0 ? `- ${Math.abs(scoreModifier)}` : `+ ${scoreModifier}`;

  return (
    <div className="flex bg-slate-700 w-full h-8 min-h-8 pl-2 border-t-[1px] first:rounded-b-xl last:rounded-t-xl pt-1">
      {/*  */}
      {/* Stat label */}
      <i className="whitespace-pre-wrap">{rollType}: </i>
      {/*  */}
      {/* Dice roll totalled */}
      <b
        className={
          tempRoll == 20
            ? "text-green-600"
            : tempRoll == 1
            ? "text-red-500"
            : "text-white"
        }
      >
        {result}
      </b>
      {/*  */}
      {/* Prepending bracket */}
      <p className="whitespace-pre-wrap text-gray-300">{" ["}</p>
      {/*  */}
      {/* Natural roll number */}
      <p
        className={
          tempRoll == 20
            ? "whitespace-pre-wrap text-green-600"
            : tempRoll == 1
            ? "whitespace-pre-wrap text-red-500"
            : "whitespace-pre-wrap text-white"
        }
      >
        {tempRoll}
      </p>
      {/*  */}
      {/* Appending bracket */}
      <p className="text-gray-300">{"]"}</p>
      <p className="whitespace-pre-wrap  text-gray-300">
        {" "}
        {scoreModifierString}
      </p>
    </div>
  );
}
export default DiceRollInstance;
