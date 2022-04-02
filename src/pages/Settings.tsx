import * as React from "react";
import useLocalStorage from "../utils/useLocalStorage";

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = () => {
  const [TwelveHourClock, updateTwelveHourClock] = useLocalStorage(
    "TwelveHourClock",
    false,
    (x: string) => x === "true" || false
  );
  const [fallAsleepTime, updateFallAsleepTime] = useLocalStorage(
    "fallAsleepTime",
    14,
    (x: string) => parseInt(x)
  );

  function handleFallAsleepTimeUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      const updatedInt = parseInt(e.target.value);
      if (updatedInt < 0 || updatedInt > 60) return;
      updateFallAsleepTime(parseInt(e.target.value));
    } catch (error) {
      console.log(error);
      console.log("Could not update!");
      return;
    }
  }

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <p className="text-white grow-0 shrink font-RedHat">
          <span className="text-[9vh] ">Settings</span>
        </p>
        <div className="grid grid-cols-1 grid-rows-2 grow h-full shrink min-w-[320px] w-[40vw] font-OpenSans border-2 border-white py-10 px-5 m-6 bg-gray-600 bg-opacity-40">
          <div className="pb-5 border-b-2 border-white">
            <label className="text-white settings-label-font ml-4">
              It takes me
              <input
                type="number"
                className=" ml-3 mr-2 w-12 bg-transparent border-b-2 border-yellow-400"
                value={fallAsleepTime}
                onChange={(e) => handleFallAsleepTimeUpdate(e)}
              />
              minute{fallAsleepTime === 1 ? "" : "s"} to fall asleep
            </label>
            <button
              className="bg-gray-600 w-auto mx-2 text-sm p-1 border-2 text-white rounded-lg"
              onClick={() => updateFallAsleepTime(14)}>
              Reset
            </button>
          </div>

          <div className="flex items-center justify-center w-full pt-5">
            <label
              htmlFor="toggleA"
              className="flex items-center cursor-pointer settings-label-font">
              <div className="mr-3 text-white font-medium">12 Hour Time</div>
              {/* <!-- toggle --> */}
              <div className="relative">
                {/* <!-- input --> */}
                <input
                  id="toggleA"
                  type="checkbox"
                  className="sr-only"
                  checked={TwelveHourClock}
                  onChange={(e) =>
                    updateTwelveHourClock((oldValue: boolean) => !oldValue)
                  }
                />
                {/* <!-- line --> */}
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                {/* <!-- dot --> */}
                <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
              </div>
              {/* <!-- label --> */}
              <div
                className={
                  "ml-3 text-white font-medium " +
                  (TwelveHourClock
                    ? "settings-indicator-on"
                    : "settings-indicator-off")
                }>
                {TwelveHourClock ? "On" : "Off"}
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
