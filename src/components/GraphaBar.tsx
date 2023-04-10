import React from "react";

interface GraphaBarType {
  day: string;
  amount: number;
  currentDay: string;
}

export function GraphaBar(props: GraphaBarType) {
  return (
    <div className="flex items-center flex-col h-44 w-14 justify-end transition-all gap-2 group ">
      <div
        id="mon_amt"
        className=" value bg-stone-800 items-center justify-center rounded-sm h-6 w-full text-white  group-hover:flex hidden"
      >
        {props.amount}
      </div>
      <div
        style={{
          height: `${props.amount}%`,
        }}
        id="mon1"
        className={`graphcolrd w-10   rounded-sm  hover:bg-rose-400  ${
          props.currentDay === props.day ? "bg-purple-400" : "bg-orange-500"
        }
         `}
      />
      <div id="mon2">{props.day}</div>
    </div>
  );
}
