import moment from "moment";
import { FunctionComponent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TimeSuggestions from "../components/TimeSuggestions";
import getLocalStorageItem from "../utils/getLocalStorageItem";

interface CalculatedSleepTimeProps {}

const CalculatedSleepTime: FunctionComponent<CalculatedSleepTimeProps> = () => {
  //TODO remove??
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const state: any = useLocation().state;

  const navigate = useNavigate();
  const mode = useLocation().pathname === "/sleep" ? "sleep" : "wake";

  const timeSuggestionData = JSON.parse(
    getLocalStorageItem("timeSelectionState", {
      sleep: { time: "22:00" },
      wake: { time: "08:00" },
    })
  );

  //TODO time parsing??
  let timeValue = moment(timeSuggestionData[mode].time, "HH:mm");

  return (
    <>
      <p className="text-white grow-0 shrink font-RedHat">
        <span className="text-[9vh] underline underline-offset-1">Snoozr</span>
      </p>
      <div className="text-black h-full shrink min-w-[320px] w-[80vw] m-0 ">
        <div className="grid grid-cols-1 h-full grow shrink ">
          <TimeSuggestions baseTime={timeValue} mode={mode} />

          {/* <SetAlternativeTimeSection /> */}
          <div className="flex flex-col h-100 w-100 items-center">
            <button
              className="bg-amber-400 py-3 px-10 rounded-lg hover:drop-shadow-md w-fit font-Roboto font-extrabold border-2 bg-opacity-80 hover:bg-opacity-100 md:text-3xl"
              onClick={() => navigate("/")}>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatedSleepTime;
