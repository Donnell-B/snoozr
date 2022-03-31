import * as React from "react";

interface SettingsProps {}

const Settings: React.FunctionComponent<SettingsProps> = () => {
  const [TwelveHourClock, updateTwelveHourClock] = React.useState(false);
  const [fallAsleepTime, updateFallAsleepTime] = React.useState(14);

  return (
    <>
      <div className="flex flex-col">
        <p className="text-white grow-0 shrink font-RedHat">
          <span className="text-[9vh] underline underline-offset-1">
            Settings
          </span>
        </p>
        <div className="grid grid-cols-1 grid-rows-2 grow h-full shrink min-w-[320px] w-[40vw] font-OpenSans border-2 border-white py-10 px-5 m-6 bg-gray-600 bg-opacity-40">
          <div className="pb-5 border-b-2 border-white">
            <label className="text-white settings-label-font">
              It takes me
              <input
                type="number"
                className=" ml-2 w-12 bg-transparent border-b-2 border-yellow-400"
                value={fallAsleepTime}
                onChange={(e) => updateFallAsleepTime(parseInt(e.target.value))}
              />
              Minutes to fall asleep
            </label>
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
                    updateTwelveHourClock((oldValue) => !oldValue)
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
