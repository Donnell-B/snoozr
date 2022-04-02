import * as React from "react";
import { FunctionComponent } from "react";

interface CustomTimePickerProps {
  timeValue: string;
  timeSetHandler: Function;
}

export const CustomTimePicker: FunctionComponent<CustomTimePickerProps> = (
  props
) => {
  return (
    <>
      <label className="hidden">Select Time</label>
      <input
        value={props.timeValue?.toString()}
        className="font-RedHat text-white rounded-md text-center text-4xl bg-transparent border-2 p-2 bg-opacity-0 bg-red-500 w-fit"
        type="time"
        id="timepicker"
        name="timepicker"
        onChange={(e) => props.timeSetHandler(e)}
        required></input>
    </>
  );
};
