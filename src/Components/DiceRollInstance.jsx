function DiceRollInstance({
  rollType = "",
  result = "",
  tempRoll = [],
  scoreModifier = "",
}) {
  let scoreModifierString =
    scoreModifier === null
      ? null
      : scoreModifier < 0
      ? `- ${Math.abs(scoreModifier)}`
      : `+ ${scoreModifier}`;

  return (
    <div className="flex text-sm text-wrap bg-slate-700 w-full h-auto pl-2 border-t-[1px] first:rounded-b-xl last:rounded-t-xl pt-1">
      {/*  */}
      {/* Stat label */}{" "}
      <div className="min-h-8 my-auto pt-1">
        <i className="whitespace-nowrap">{rollType ? `${rollType}: ` : null}</i>
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
        <span>
          <span className="whitespace-pre-wrap text-gray-300">{" ["}</span>
          {/*  */}
          {/* Natural roll number */}
          <span
            className={
              tempRoll == 20
                ? "whitespace-pre-wrap text-wrap text-green-600"
                : tempRoll == 1
                ? "whitespace-pre-wrap text-wrap text-red-500"
                : "whitespace-pre-wrap text-wrap text-white"
            }
          >
            {tempRoll}
          </span>
          {/*  */}
          {/* Appending bracket */}
          <span className="text-gray-300">{"]"}</span>
        </span>
        <span className="whitespace-pre-wrap text-gray-300">
          {" "}
          {scoreModifierString ? scoreModifierString : null}
        </span>
      </div>
    </div>
  );
}
export default DiceRollInstance;
