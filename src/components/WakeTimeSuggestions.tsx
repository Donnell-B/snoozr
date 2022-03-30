import moment from "moment";
import * as React from "react";
import { FunctionComponent } from "react";

interface WakeTimeSuggestionsProps {}

const WakeTimeSuggestions: FunctionComponent<WakeTimeSuggestionsProps> = () => {
  const cycle = 1.5;
  const numOfCycles = 6;
  const cycles: number[] = [];

  for (let index = 1; index < numOfCycles + 1; index++) {
    cycles[index] = cycle * index;
  }
  return (
    <div className="flex flex-col items-center justify-center py-2 gap-2 text-white">
      <p className="suggestions_font pb-2">
        If I sleep now I should wake up at...
      </p>
      <p className="desc_text">
        <ul className="list-none bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-sky-800 text-2xl md:text-3xl">
          {cycles.map((element, index) => {
            return (
              <li
                key={index}
                className="inline-block px-1"
                title={index + (index === 1 ? " Cycle" : " Cycles")}>
                {moment()
                  .add(14, "minutes")
                  .add(element, "hours")
                  .format("HH:mm A")}
                {index !== cycles.length - 1 && ","}
              </li>
            );
          })}
        </ul>
      </p>
      {/* <br /> */}
      <p className="questionText pt-2">How is this calculated?</p>
    </div>
  );
};

export default WakeTimeSuggestions;
