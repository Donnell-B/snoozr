import moment from "moment";
import * as React from "react";
import { FunctionComponent } from "react";
import getLocalStorageItem from "../utils/getLocalStorageItem";
import Modal from "./Modal";

interface WakeTimeSuggestionsProps {}

const WakeTimeSuggestions: FunctionComponent<WakeTimeSuggestionsProps> = () => {
  const cycle = 1.5;
  const numOfCycles = 6;
  const cycles: number[] = [];

  const twelveHourTime = getLocalStorageItem(
    "TwelveHourClock",
    false,
    (x: string) => x === "true" || false
  );
  const fallAsleepTime = getLocalStorageItem(
    "fallAsleepTime",
    14,
    (x: string) => parseInt(x)
  );
  const timeFormat = twelveHourTime ? "hh:mm A" : "HH:mm A";

  for (let index = 1; index < numOfCycles + 1; index++) {
    cycles[index] = cycle * index;
  }
  return (
    <div className="flex flex-col text-white justify-around min-h-fit grow h-full">
      <p className="suggestions_font pb-2">
        If I sleep now I should wake up at...
      </p>
      <span className="desc_text">
        <ul className="font-medium list-none bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-sky-400 to-blue-800 text-2xl md:text-3xl">
          {cycles.map((element, index) => {
            return (
              <li
                key={index}
                className={
                  "inline-block px-1" + (index >= 5 ? " font-extrabold" : "")
                }
                title={index + (index === 1 ? " Cycle" : " Cycles")}>
                {moment()
                  .add(fallAsleepTime, "minutes")
                  .add(element, "hours")
                  .format(timeFormat)}
                {index !== cycles.length - 1 && ","}
              </li>
            );
          })}
        </ul>
      </span>
      <p className=" desc_text">
        You should aim for 5-6 cycles for a good night's sleep.
      </p>
      {/* <br /> */}
      <span className="questionText pt-2">
        <Modal
          text={"How is this calculated?"}
          bodyText="Snoozr works by calculating the time at the end of each sleep cycle. 
          Sleep cycles are typically an hour and a half long and waking up at the end of one will leave you feeling less groggy. 
          Snoozr takes the time you plan on sleeping (or waking up) along with the time it usually takes a person to fall asleep 
          (14 minutes, but you can change this in the settings!) and calculates the best time to sleep or wake up based on when you would be finishing a sleep cycle!"
        />
      </span>
    </div>
  );
};

export default WakeTimeSuggestions;
