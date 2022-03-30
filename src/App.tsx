import React from "react";
import "./App.css";
import { Background } from "./components/BackgroundParticles";
import { NavBar } from "./components/NavBar";
import { SetAlternativeTimeSection } from "./components/SetAlternativeTimeSection";
import WakeTimeSuggestions from "./components/WakeTimeSuggestions";

function App() {
  return (
    <>
      <Background />
      <div className="App contrast-100">
        <NavBar />
        <p className="text-white grow-0 shrink font-RedHat">
          <span className="text-[9vh] underline underline-offset-1">
            Snoozr
          </span>
        </p>
        <div className="text-black h-full shrink min-w-[320px] w-[80vw] m-0 ">
          <div className="grid grid-cols-1 h-full grow shrink content-evenly justify-items-center">
            <WakeTimeSuggestions />
            <div className="h-full align-bottom self-end">
              <p className="alt_title_text self-end">OR...</p>
            </div>

            <SetAlternativeTimeSection />
          </div>
        </div>
        {/* <div></div> */}
      </div>
    </>
  );
}

export default App;
