import * as React from "react";
import { CustomTimePicker } from "./CustomTimePicker";
import { ModeDropDownSelect } from "./ModeDropDownSelect";

export function SetAlternativeTimeSection() {
  return (
    <div>
      <div className="flex justify-center">
        <p className="alt_title_text pb-5">OR...</p>
      </div>
      <div className="shrink flex flex-col items-center py-2 gap-4 bg-gray-400 border-2 border-white  bg-opacity-30 grow min-w-[320px] w-[50vw] max-w-full">
        <p className="alt_text">
          <ModeDropDownSelect />
        </p>
        <CustomTimePicker />
        <button className="bg-amber-400 py-1 px-2 rounded-lg hover:drop-shadow-md w-fit font-Roboto font-extrabold border-2 bg-opacity-80 hover:bg-opacity-100">
          What time should I wake up?
        </button>
      </div>
    </div>
  );
}
