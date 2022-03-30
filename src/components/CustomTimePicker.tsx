import moment from "moment";
import * as React from "react";
import { useState } from "react";

export function CustomTimePicker() {
  const [value, setValue] = useState<string | null>(
    moment().add(8, "hours").format("HH:mm")
  );

  return (
    <>
      <input
        value={value?.toString()}
        className="font-RedHat text-white rounded-md text-center text-4xl bg-transparent border-2 p-2 bg-opacity-0 bg-red-500 w-fit"
        type="time"
        id="appt"
        name="appt"
        onChange={(e) => setValue(e.target.value)}
        required></input>
    </>
  );
}
