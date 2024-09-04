function Combat() {
  return (
    <div className="grid grid-cols-3 col-span-2 grid-rows-2 row-span-2 bg-white rounded-lg shadow-xl min-h-[50px]">
      <div className="grid bg-red-700 rounded-lg shadow-xl min-h-[50px] m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          Initiative
        </div>

        <div className="text-center">+3</div>
      </div>

      <div className="grid bg-red-700 rounded-lg shadow-xl min-h-[50px] m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          AC
        </div>

        <div className="text-center">16</div>
      </div>

      <div className="grid bg-red-700 rounded-lg shadow-xl min-h-[50px] m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          Speed
        </div>

        <div className="text-center">40ft</div>
      </div>

      <div className="grid bg-red-700 rounded-lg shadow-xl min-h-[50px] m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          Hit Die
        </div>

        <div className="text-center">5d12 / 1d10</div>
      </div>

      <div className="grid bg-red-700 rounded-lg shadow-xl min-h-[50px] m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          HP
        </div>

        <div className="text-center">55 / 63</div>
      </div>

      <div className="grid bg-red-700 rounded-lg shadow-xl min-h-[50px] m-1">
        <div id="" className="text-center text-xs max-h-3 my-0.5">
          Prof. Bonus
        </div>

        <div className="text-center">+3</div>
      </div>
    </div>
  );
}
export default Combat;
