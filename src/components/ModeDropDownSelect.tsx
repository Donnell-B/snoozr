import React from "react";

export function ModeDropDownSelect() {
  return (
    <div className="dropdown">
      <form action="/action_page.php">
        <label>I plan to </label>
        <select name="cars" id="cars" className="modeSelector">
          <option
            value="volvo"
            className="bg-gray-700 text-yellow-400 text-center">
            Wake up
          </option>
          <option
            value="saab"
            className="bg-gray-700 text-yellow-400 text-center">
            Sleep
          </option>
        </select>
        <label> at</label>
      </form>
    </div>
  );
}
