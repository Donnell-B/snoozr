import moment from "moment";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../utils/useLocalStorage";
import useLocalStorageObject from "../utils/useLocalStorageObject";
import { CustomTimePicker } from "./CustomTimePicker";
import { ModeDropDownSelect } from "./ModeDropDownSelect";

export function SetAlternativeTimeSection() {
  const navigate = useNavigate();

  const [time, setTime] = React.useState<string>(
    moment().add(8, "hours").format("HH:mm")
  );
  const [mode, setMode] = useLocalStorage("mode", "wake");

  const [timeSelectionState, setTimeSelectionState] = useLocalStorageObject(
    "timeSelectionState",
    { sleep: { time: "22:00" }, wake: { time: "08:00" } }
  );

  React.useEffect(() => {
    setTimeSelectionState((prev: any) => {
      return { ...prev, [mode]: { time } };
    });
  }, [time]);

  React.useEffect(() => {
    setTime(timeSelectionState[mode].time);
  }, [mode]);

  function modeSetHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setMode(e.target.value);
  }

  function timeSetHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTime(e.target.value);
  }

  return (
    <div>
      <div className="flex justify-center">
        <p className="alt_title_text pb-5">OR...</p>
      </div>
      <div className="shrink flex flex-col items-center py-2 gap-4 bg-gray-400 border-2 border-white  bg-opacity-30 grow min-w-[320px] w-[50vw] max-w-full">
        <span className="alt_text">
          <ModeDropDownSelect mode={mode} modeSetHandler={modeSetHandler} />
        </span>
        <CustomTimePicker timeValue={time} timeSetHandler={timeSetHandler} />
        <button
          className="bg-amber-400 py-1 px-2 rounded-lg hover:drop-shadow-md w-fit font-Roboto font-extrabold border-2 bg-opacity-80 hover:bg-opacity-100"
          onClick={() => {
            switch (mode) {
              case "wake":
                navigate("/wake", {
                  state: { time, mode },
                });
                break;

              case "sleep":
                navigate("/sleep", {
                  state: { time, mode },
                });
                break;

              default:
                navigate("/");
                break;
            }
          }}>
          {mode === "sleep"
            ? "What time should I wake up?"
            : "What time should I sleep?"}
        </button>
      </div>
    </div>
  );
}
