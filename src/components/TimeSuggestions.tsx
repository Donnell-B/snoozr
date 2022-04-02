import moment, { Moment } from "moment";
import { FunctionComponent } from "react";
import getLocalStorageItem from "../utils/getLocalStorageItem";

interface TimeSuggestionsProps {
  baseTime?: Moment;
  mode: string;
}

const WakeTimeSuggestions: FunctionComponent<TimeSuggestionsProps> = (
  props
) => {
  const cycle = 1.5;
  const numOfCycles = 6;
  const cycles: number[] = [];
  const baseTime = props.baseTime ? props.baseTime : moment();
  const mode = props.mode ? props.mode : "wake";

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

  //TODO remove
  const timeSuggestionData = JSON.parse(
    getLocalStorageItem("timeSelectionState", {
      sleep: { time: "22:00" },
      wake: { time: "08:00" },
    })
  );

  //TODO THIS REMOVE THIS
  // const baseTimetwo = moment(timeSuggestionData[mode].time, "HH:mm");
  // console.log("fuck " + baseTimetwo);
  const timeFormat = twelveHourTime ? "hh:mm A" : "HH:mm A";

  for (let index = 1; index < numOfCycles + 1; index++) {
    cycles[index] = cycle * index;
  }
  if (mode === "wake") cycles.reverse();

  function calculateSleepTime(element: number, index: number) {
    if (mode === "wake") {
      return moment(baseTime)
        .subtract(fallAsleepTime, "minutes")
        .subtract(element, "hours")
        .format(timeFormat);
    }

    return moment(baseTime)
      .add(fallAsleepTime, "minutes")
      .add(element, "hours")
      .format(timeFormat);
  }

  function TimeText() {
    const sleepMode = () => (
      <>
        If I plan to sleep at {moment(baseTime).format(timeFormat)} I should
        wake up at...
      </>
    );

    const wakeMode = () => (
      <>
        If I plan to wake up at {moment(baseTime).format(timeFormat)} I should
        sleep at...
      </>
    );

    return (
      <p className="suggestions_font">
        {mode === "sleep" ? sleepMode() : wakeMode()}
      </p>
    );
  }

  function calculateClassName(index: number) {
    if (mode === "wake")
      return "inline-block px-1" + (index <= 1 ? " font-extrabold" : "");
    return "inline-block px-1" + (index >= 5 ? " font-extrabold" : "");
  }

  function calculateText(index: number, mode: string) {
    if (mode === "wake")
      return (
        numOfCycles - index + (numOfCycles - index === 1 ? " Cycle" : " Cycles")
      );
    return index + (index === 1 ? " Cycle" : " Cycles");
  }

  // console.log(cycles);
  return (
    <div className="flex flex-col py-2 gap-2 text-white justify-around min-h-fit grow h-full">
      <TimeText />
      <span className="desc_text">
        <ul
          className={
            "font-medium list-none bg-clip-text text-transparent" +
            (mode === "wake" ? " bg-gradient-to-l " : " bg-gradient-to-r ") +
            "from-pink-400 via-sky-400 to-blue-800 text-2xl md:text-3xl"
          }>
          {cycles.map((element, index) => {
            return (
              <li
                key={index}
                className={calculateClassName(index)}
                title={calculateText(index, mode)}>
                {calculateSleepTime(element, index)}
                {index !== cycles.length - 1 && ","}
              </li>
            );
          })}
        </ul>
      </span>
      <p className="desc_text">You should aim for 5-6 cycles</p>
      {/* <br /> */}
      <p className="questionText pt-2">How is this calculated?</p>
    </div>
  );
};

export default WakeTimeSuggestions;
