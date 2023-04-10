import React from "react";

interface GraphaBarType {
  day: string;
}

export function GraphaBar(props: GraphaBarType) {
  return (
    <div className="flex items-center flex-col h-44 w-14 justify-end transition-all gap-2 group ">
      <div
        id="mon_amt"
        className=" value bg-stone-800 items-center justify-center rounded-sm h-6 w-full text-white  group-hover:flex hidden">
        123
      </div>
      <div
        id="mon1"
        className="graphcolrd w-10 bg-orange-500 h-full rounded-sm  hover:bg-rose-400"
      />
      <div id="mon2">{props.day}</div>
    </div>
  );
}
