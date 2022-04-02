import React, { FunctionComponent } from "react";

interface ModeDropDownSelectProps {
  mode: string;
  modeSetHandler: Function;
}

export const ModeDropDownSelect: FunctionComponent<ModeDropDownSelectProps> = (
  props
) => {
  return (
    <div className="dropdown">
      <form action="/action_page.php">
        <label>I plan to </label>
        <select
          name="modeSelect"
          id="modeSelect"
          className="modeSelector"
          value={props.mode}
          onChange={(e) => props.modeSetHandler(e)}>
          <option
            value="wake"
            className="bg-gray-700 text-yellow-400 text-center">
            Wake up
          </option>
          <option
            value="sleep"
            className="bg-gray-700 text-yellow-400 text-center">
            Sleep
          </option>
        </select>
        <label> at</label>
      </form>
    </div>
  );
};
