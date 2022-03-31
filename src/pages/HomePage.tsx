import { SetAlternativeTimeSection } from "../components/SetAlternativeTimeSection";
import WakeTimeSuggestions from "../components/WakeTimeSuggestions";

export function HomePage() {
  return (
    <>
      <p className="text-white grow-0 shrink font-RedHat">
        <span className="text-[9vh] underline underline-offset-1">Snoozr</span>
      </p>
      <div className="text-black h-full shrink min-w-[320px] w-[80vw] m-0 ">
        <div className="grid grid-cols-1 grid-rows-2 h-full grow shrink content-evenly justify-items-center items-center">
          <WakeTimeSuggestions />

          <SetAlternativeTimeSection />
        </div>
      </div>
    </>
  );
}
